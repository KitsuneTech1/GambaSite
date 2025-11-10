const API_BASE = "https://api.tryharderapi.lol";

// Helper function to normalize skin names for matching with image filenames
function normalizeSkinName(skinName) {
    // Specific handling for knife names to match the Python script's output
    const knifeTypes = [
        "M9 Bayonet", "Karambit", "Huntsman Knife", "Butterfly Knife", "Falchion Knife",
        "Shadow Daggers", "Bowie Knife", "Ursus Knife", "Navaja Knife", "Stiletto Knife",
        "Talon Knife", "Survival Knife", "Paracord Knife", "Skeleton Knife", "Nomad Knife",
        "Classic Knife", "Bayonet", "Flip Knife", "Gut Knife", "Falchion Knife", "Daggers"
    ];

    let normalizedName = skinName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (const knifeType of knifeTypes) {
        const normalizedKnifeType = knifeType.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        if (normalizedName.startsWith(normalizedKnifeType)) {
            const skinPart = normalizedName.substring(normalizedKnifeType.length);
            if (skinPart) {
                return `${normalizedKnifeType}_${skinPart}`;
            } else {
                return normalizedKnifeType; // For cases like "M9 Bayonet" with no specific skin
            }
        }
    }
    return normalizedName;
}

function getImagePath(skinName) {
    const normalizedName = normalizeSkinName(skinName);
    // Assuming all images are now in lowercase and follow the normalized_name.png format
    return `/GambaSite/all_skins_in_game/${normalizedName}.png`;
}

// Define a list of expensive skins for the scroller (this can remain hardcoded or be fetched from another endpoint if available)
const expensiveSkins = [
    { name: "AWP | Dragon Lore", image: getImagePath("AWP | Dragon Lore"), price: 2000.00 },
    { name: "AK-47 | Fire Serpent", image: getImagePath("AK-47 | Fire Serpent"), price: 500.00 },
    { name: "AWP | Gungnir", image: getImagePath("AWP | Gungnir"), price: 1500.00 },
    { name: "AK-47 | Wild Lotus", image: getImagePath("AK-47 | Wild Lotus"), price: 1200.00 },
    { name: "AWP | Medusa", image: getImagePath("AWP | Medusa"), price: 1000.00 },
    { name: "AK-47 | Gold Arabesque", image: getImagePath("AK-47 | Gold Arabesque"), price: 800.00 },
    { name: "AWP | The Prince", image: getImagePath("AWP | The Prince"), price: 700.00 },
    { name: "AK-47 | Hydroponic", image: getImagePath("AK-47 | Hydroponic"), price: 400.00 },
    { name: "AWP | Fade", image: getImagePath("AWP | Fade"), price: 300.00 },
    { name: "AK-47 | Neon Revolution", image: getImagePath("AK-47 | Neon Revolution"), price: 150.00 },
    { name: "AWP | Printstream", image: getImagePath("AWP | Printstream"), price: 250.00 },
    { name: "AK-47 | Bloodsport", image: getImagePath("AK-47 | Bloodsport"), price: 180.00 },
];

export let allCases = []; // Declare allCases at the top level

export function calculateRTP(caseObj) {
    let expectedValue = 0;
    caseObj.drops.forEach(drop => {
        expectedValue += drop.odds * drop.value;
    });
    return (expectedValue / caseObj.price * 100).toFixed(2);
}

export function rollCrate(caseId) {
    const crate = allCases.find(c => c.id === caseId); // Use allCases
    if (!crate) {
        return null;
    }

    const roll = Math.random();
    let cumulative = 0;
    for (const drop of crate.drops) {
        cumulative += drop.odds;
        if (roll <= cumulative) {
            return { ...drop, price: drop.value }; 
        }
    }
    return { ...crate.drops[crate.drops.length - 1], price: crate.drops[crate.drops.length - 1].value };
}

function generateCaseCard(caseObj) {
    const rtp = calculateRTP(caseObj); 

    const dropItemsHtml = caseObj.drops.map(drop => {
        const dropValue = drop.value; 

        return `
            <div class="drop-item">
                <img src="${drop.image}" alt="${drop.name}">
                <p class="drop-price">$${dropValue.toFixed(2)}</p>
            </div>
        `;
    }).join("");

    return `
        <div class="case-card" data-case-id="${caseObj.id}">
            <div class="case-header">
                <span class="case-rtp">${rtp}% RTP</span>
                <span class="case-volatility">${caseObj.volatility} Volatility</span>
                <i class="fas fa-star favorite-icon"></i>
            </div>
            <img src="${caseObj.image}" alt="${caseObj.name}" class="case-image">
            <h3>${caseObj.name}</h3>
            <p class="case-price"><i class="fas fa-coins coin-icon"></i> ${caseObj.price.toFixed(2)}</p>
            <div class="case-drops-preview">
                ${dropItemsHtml}
            </div>
            <button class="open-case-btn">OPEN CASE</button>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const casesGrid = document.querySelector('.cases-grid');
    const caseSearchInput = document.getElementById('case-search-input');
    const minPriceSlider = document.getElementById('min-price-slider');
    const maxPriceSlider = document.getElementById('max-price-slider');
    const currentMinPriceSpan = document.getElementById('current-min-price');
    const currentMaxPriceSpan = document.getElementById('current-max-price');
    const volatilitySlider = document.getElementById('volatility-slider');
    const recentDropsScroller = document.querySelector('.recent-drops-scroller');

    // Function to add a random expensive skin to the scroller
    const addRandomExpensiveSkin = () => {
        if (recentDropsScroller) {
            const randomIndex = Math.floor(Math.random() * expensiveSkins.length);
            const skin = expensiveSkins[randomIndex];

            const scrollerItem = document.createElement('div');
            scrollerItem.classList.add('scroller-item');
            scrollerItem.innerHTML = `
                <img src="${skin.image}" alt="${skin.name}">
                <span class="skin-name">${skin.name}</span>
                <span class="skin-price">$${skin.price.toFixed(2)}</span>
            `;
            recentDropsScroller.prepend(scrollerItem); // Add to the beginning

            // Keep the scroller from getting too long (optional, remove if infinite scroll is desired)
            if (recentDropsScroller.children.length > 20) {
                recentDropsScroller.removeChild(recentDropsScroller.lastChild); // Remove from the end
            }
            // Adjust scroll position to keep the view consistent when prepending
            // This is a simple approach; more complex logic might be needed for smooth animation
            recentDropsScroller.scrollLeft = 0; // Scroll to the left to show new items
        }
    };

    // Populate initial scroller items
    for (let i = 0; i < 20; i++) { // Increased initial preload count
        addRandomExpensiveSkin();
    }

    // Continuously add new skins every few seconds
    setInterval(addRandomExpensiveSkin, 3000); // Add a new skin every 3 seconds

    // Determine the maximum price from allCases for slider max value
    let maxCasePrice = 1000; // Default max price, will be updated after fetch
    
    // Function to update slider max values based on fetched cases
    const updateSliderMaxPrice = () => {
        if (allCases.length > 0) {
            maxCasePrice = Math.max(...allCases.map(c => c.price));
        }
        if (minPriceSlider && maxPriceSlider) {
            minPriceSlider.max = maxCasePrice.toFixed(2);
            maxPriceSlider.max = maxCasePrice.toFixed(2);
            maxPriceSlider.value = maxCasePrice.toFixed(2); // Set initial max value
        }
    };

    async function fetchCases() {
        try {
            const response = await fetch(`${API_BASE}/crate/list`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const cratesData = await response.json();

            allCases = cratesData.map(crate => {
                // Find the most valuable drop to use as the main image for the crate
                const mostValuableDrop = crate.drops.reduce((prev, current) => {
                    return (prev.value > current.value) ? prev : current;
                });

                return {
                    id: crate.id,
                    name: crate.name,
                    price: crate.price,
                    currency: crate.currency,
                    volatility: crate.volatility,
                    image: getImagePath(mostValuableDrop.name), // Construct image path using the new function
                    drops: crate.drops.map(drop => ({
                        name: drop.name,
                        value: drop.value,
                        odds: drop.chance, // Map 'chance' to 'odds'
                        image: getImagePath(drop.name) // Construct image path for drops using the new function
                    }))
                };
            });
            updateSliderMaxPrice(); // Update slider max values after fetching
            applyFilters(); // Render cases after fetching
        } catch (error) {
            console.error("Error fetching cases:", error);
            // If API fails, allCases will remain empty, and a "No cases found" message will be displayed.
            applyFilters();
        }
    }

    // Function to update slider display values
    const updateSliderDisplay = () => {
        if (currentMinPriceSpan && minPriceSlider) {
            currentMinPriceSpan.textContent = parseFloat(minPriceSlider.value).toFixed(2);
        }
        if (currentMaxPriceSpan && maxPriceSlider) {
            currentMaxPriceSpan.textContent = parseFloat(maxPriceSlider.value).toFixed(2);
        }
    };

    // Function to render cases
    const renderCases = (casesToRender) => {
        if (casesGrid) {
            casesGrid.innerHTML = ""; // Clear existing cases
            if (casesToRender.length === 0) {
                casesGrid.innerHTML = `<p style="text-align: center; width: 100%; color: #aaa;">No cases found matching your criteria.</p>`;
                return;
            }
            casesToRender.forEach(caseObj => {
                casesGrid.insertAdjacentHTML("beforeend", generateCaseCard(caseObj));
            });
        }
    };

    // Function to apply all filters
    const applyFilters = () => {
        let filteredCases = [...allCases]; // Use allCases

        // Apply search filter
        const searchTerm = caseSearchInput ? caseSearchInput.value.toLowerCase() : "";
        if (searchTerm) {
            filteredCases = filteredCases.filter(caseObj =>
                caseObj.name.toLowerCase().includes(searchTerm)
            );
        }

        // Apply price range filter
        const minPrice = minPriceSlider ? parseFloat(minPriceSlider.value) : 0;
        const maxPrice = maxPriceSlider ? parseFloat(maxPriceSlider.value) : maxCasePrice;

        filteredCases = filteredCases.filter(caseObj =>
            caseObj.price >= minPrice && caseObj.price <= maxPrice
        );

        // Apply volatility filter
        if (volatilitySlider) {
            const sliderValue = parseFloat(volatilitySlider.value);
            if (sliderValue >= 40 && sliderValue <= 60) {
                // Show all cases (no volatility filter applied)
            } else if (sliderValue < 40) {
                filteredCases = filteredCases.filter(caseObj => caseObj.volatility === "Low");
            } else { // sliderValue > 60
                filteredCases = filteredCases.filter(caseObj => caseObj.volatility === "High");
            }
        }

        renderCases(filteredCases);
        updateSliderDisplay(); // Update display after filtering
    };

    // Initial render and display update
    fetchCases(); // Fetch cases on load
    updateSliderDisplay();

    // Event listeners for filters
    if (caseSearchInput) {
        caseSearchInput.addEventListener('input', applyFilters);
    }

    if (minPriceSlider) {
        minPriceSlider.addEventListener('input', () => {
            if (parseFloat(minPriceSlider.value) > parseFloat(maxPriceSlider.value)) {
                minPriceSlider.value = maxPriceSlider.value;
            }
            applyFilters();
        });
    }

    if (maxPriceSlider) {
        maxPriceSlider.addEventListener('input', () => {
            if (parseFloat(maxPriceSlider.value) < parseFloat(minPriceSlider.value)) {
                maxPriceSlider.value = minPriceSlider.value;
            }
            applyFilters();
        });
    }

    if (volatilitySlider) {
        volatilitySlider.addEventListener('input', applyFilters);
    }

    // Event listener for opening a specific case
    if (casesGrid) {
        casesGrid.addEventListener('click', (event) => {
            const openCaseBtn = event.target.closest('.open-case-btn');
            if (openCaseBtn) {
                const caseCard = openCaseBtn.closest('.case-card');
                const caseId = caseCard.dataset.caseId;
                window.location.href = `unboxing.html?caseId=${caseId}`;
            }
        });
    }
});
