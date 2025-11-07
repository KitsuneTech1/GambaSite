import { apiGet } from './common.js';

export let caseData = []; // Will be populated from API

// Mapping for knife names to their image files in scraped_images
const knifeImageMap = {
    "Karambit | Doppler (Phase 2)": "Karambit  Doppler (Phase 2)_400.png",
    "Butterfly Knife | Fade": "Butterfly Knife  Fade_390.png",
    "Karambit | Gamma Doppler (Emerald)": "Karambit  Gamma Doppler (Emerald)_401.png",
    "M9 Bayonet | Doppler (Sapphire)": "M9 Bayonet  Doppler (Sapphire)_395.png",
    "Talon Knife | Marble Fade": "Talon Knife  Marble Fade_405.png",
    "Karambit | Lore": "Karambit  Lore_402.png",
    // Add other knives as needed based on scraped_images
};

export function calculateRTP(caseObj) {
    let expectedValue = 0;
    caseObj.drops.forEach(drop => {
        expectedValue += drop.odds * drop.value;
    });
    return (expectedValue / caseObj.price * 100).toFixed(2);
}

// This function will no longer be used for actual rolls, but kept for demo/local fallback if needed
export function rollCrate(caseId) {
    const crate = caseData.find(c => c.id === caseId);
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

    // Define a list of expensive skins for the scroller
    const expensiveSkins = [
        { name: "AWP | Dragon Lore", image: "all_skins_in_game/AWPDragonLore.png", price: 2000.00 },
        { name: "AK-47 | Fire Serpent", image: "all_skins_in_game/AK-47FireSerpent.png", price: 500.00 },
        { name: "AWP | Gungnir", image: "all_skins_in_game/AWPGungnir.png", price: 1500.00 },
        { name: "AK-47 | Wild Lotus", image: "all_skins_in_game/AK-47WildLotus.png", price: 1200.00 },
        { name: "AWP | Medusa", image: "all_skins_in_game/AWPMedusa.png", price: 1000.00 },
        { name: "AK-47 | Gold Arabesque", image: "all_skins_in_game/AK-47GoldArabesque.png", price: 800.00 },
        { name: "AWP | The Prince", image: "all_skins_in_game/AWPThePrince.png", price: 700.00 },
        { name: "AK-47 | Hydroponic", image: "all_skins_in_game/AK-47Hydroponic.png", price: 400.00 },
        { name: "AWP | Fade", image: "all_skins_in_game/AWPFade.png", price: 300.00 },
        { name: "AK-47 | Neon Revolution", image: "all_skins_in_game/AK-47NeonRevolution.png", price: 150.00 },
        { name: "AWP | Printstream", image: "all_skins_in_game/AWPPrintstream.png", price: 250.00 },
        { name: "AK-47 | Bloodsport", image: "all_skins_in_game/AK-47Bloodsport.png", price: 180.00 },
    ];

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


    // Determine the maximum price from caseData for slider max value
    let allCases = [];

    async function fetchCases() {
        try {
            const response = await apiGet("/crate/list");
            caseData = response.crates; // Assuming the API returns an object with a 'crates' array
            
            // Update knife images
            caseData.forEach(caseObj => {
                caseObj.drops.forEach(drop => {
                    if (knifeImageMap[drop.name]) {
                        drop.image = `/scraped_images/${knifeImageMap[drop.name]}`;
                    }
                });
            });

            allCases = [...caseData];
            applyFilters(); // Render cases after fetching
        } catch (error) {
            console.error("Error fetching cases:", error);
            // Handle error, maybe display a message to the user
            casesGrid.innerHTML = `<p style="text-align: center; width: 100%; color: #aaa;">Failed to load cases. Please try again later.</p>`;
        }
    }

    // Determine the maximum price from caseData for slider max value
    // This needs to be called after caseData is populated
    let maxCasePrice = 0;
    if (caseData.length > 0) {
        maxCasePrice = Math.max(...caseData.map(c => c.price));
    }
    
    if (minPriceSlider && maxPriceSlider) {
        minPriceSlider.max = maxCasePrice.toFixed(2);
        maxPriceSlider.max = maxCasePrice.toFixed(2);
        maxPriceSlider.value = maxCasePrice.toFixed(2); // Set initial max value
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
        let filteredCases = [...allCases]; // Use allCases instead of caseData

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
