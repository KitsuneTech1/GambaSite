const API_BASE = "https://api.tryharderapi.lol"; // Moved from cases-script.js

// Helper function to normalize skin names for matching with image filenames
function normalizeSkinName(skinName) {
    // This function must exactly match the Python script's normalization logic
    const knifeTypes = [
        "M9 Bayonet", "Karambit", "Huntsman Knife", "Butterfly Knife", "Falchion Knife",
        "Shadow Daggers", "Bowie Knife", "Ursus Knife", "Navaja Knife", "Stiletto Knife",
        "Talon Knife", "Survival Knife", "Paracord Knife", "Skeleton Knife", "Nomad Knife",
        "Classic Knife", "Bayonet", "Flip Knife", "Gut Knife", "Falchion Knife", "Daggers"
    ];

    let baseName = skinName;
    // First, remove the ★ prefix if present
if (baseName.startsWith('★')) {
    baseName = baseName.substring(1).trim();
}
    // Then, remove "Souvenir" and "StatTrak" prefixes using regex for robustness
    // This ensures these are removed before any other normalization or knife logic
    baseName = baseName.replace(/^(Souvenir|StatTrak™?)\s*/i, ''); // Added '?' for optional ™

    let normalizedBaseName = baseName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let newFilenameBase = "";
    
    let isKnife = false;
    for (const knifeType of knifeTypes) {
        const normalizedKnifeType = knifeType.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        if (normalizedBaseName.startsWith(normalizedKnifeType)) {
            isKnife = true;
            let skinPart = baseName;
            if (skinPart.startsWith(knifeType)) {
                skinPart = skinPart.substring(knifeType.length).trim();
            }
            // Also remove common delimiters like '|' or '-' if they are at the beginning of skinPart
            if (skinPart.startsWith('|') || skinPart.startsWith('-')) {
                skinPart = skinPart.substring(1).trim();
            }

            const normalizedSkinPart = skinPart.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            
            if (normalizedSkinPart) {
                newFilenameBase = `${normalizedKnifeType}${normalizedKnifeType}${normalizedSkinPart}`;
            } else {
                newFilenameBase = `${normalizedKnifeType}${normalizedKnifeType}`;
            }
            break;
        }
    }
    
    if (!isKnife) {
        newFilenameBase = normalizedBaseName;
    }
    
    return newFilenameBase;
}

function getImagePath(skinName) {
    const normalizedFileName = normalizeSkinName(skinName);
    // Appending '1' to the filename as per user's request to force GitHub update
    return `/all_skins_in_game/${normalizedFileName}1.png`;
}

let allCases = []; // Declare allCases at the top level, will be populated by fetch

function calculateRTP(caseObj) {
    let expectedValue = 0;
    caseObj.drops.forEach(drop => {
        expectedValue += drop.odds * drop.value;
    });
    return (expectedValue / caseObj.price * 100).toFixed(2);
}

function getCaseById(caseId) {
    return allCases.find(c => c.id === caseId);
}

function populateUnboxingPage(caseObj) {
    document.getElementById("caseImage").src = caseObj.image;
    document.getElementById("caseName").textContent = caseObj.name;
    document.getElementById("caseRTP").textContent = `${calculateRTP(caseObj)}% RTP`; 
    document.getElementById("openCasePrice").textContent = caseObj.price.toFixed(2);

    const caseDropsList = document.getElementById("caseDropsList");
    caseDropsList.innerHTML = ""; // Clear previous drops

    caseObj.drops.forEach(drop => {
        const dropValue = drop.value; 
        const dropItemHtml = `
            <div class="drop-item-sidebar rarity-${drop.rarity}">
                <img src="${drop.image}" alt="${drop.name}">
                <p>${drop.name}</p>
                <p class="drop-price">$${dropValue.toFixed(2)}</p>
                <p class="drop-odds">${(drop.odds * 100).toFixed(2)}%</p>
            </div>
        `;
        caseDropsList.insertAdjacentHTML("beforeend", dropItemHtml);
    });
}

const unboxingReel = document.getElementById('unboxingReel');
const itemWidth = 110; // 100px width + 5px margin on each side
const itemsToPreload = 50; // Number of items to initially load in the reel
const landingSpotIndex = Math.floor(itemsToPreload / 2); // Fixed index for the winning item to land on

function populateReel(caseObj, winningItem = null) {
    unboxingReel.innerHTML = ''; // Clear previous items
    const items = [];

    // Populate the reel with random items
    for (let i = 0; i < itemsToPreload; i++) {
        const randomDrop = caseObj.drops[Math.floor(Math.random() * caseObj.drops.length)];
        items.push({
            name: randomDrop.name,
            image: randomDrop.image,
            rarity: randomDrop.rarity // Assuming rarity is part of the drop object
        });
    }

    // If a winning item is provided, place it at the landing spot
    if (winningItem) {
        items[landingSpotIndex] = winningItem;
    }

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item', `rarity-${item.rarity}`);
        itemElement.innerHTML = `<img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
        unboxingReel.appendChild(itemElement);
    });
}

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
                    image: getImagePath(drop.name), // Construct image path for drops using the new function
                    rarity: drop.rarity || "common" // Assuming rarity might be in drop, default to common
                }))
            };
        });
    } catch (error) {
        console.error("Error fetching cases:", error);
        // Handle error, e.g., display a message to the user
    }
}

async function startSpin(caseObj) {
    const authToken = localStorage.getItem("auth_token"); // Assuming auth_token is stored here
    if (!authToken) {
        alert("Please log in to open cases.");
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/crate/open`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                crate_id: caseObj.id,
                currency_code: caseObj.currency // Use the currency from the case object
            })
        });

        if (!response.ok) {
            let errorMessage = `HTTP error! status: ${response.status}`;
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } catch (e) {
                // If response is not JSON, use text
                errorMessage = await response.text() || errorMessage;
            }
            throw new Error(errorMessage);
        }

        const result = await response.json();
        const winningItemWithWear = {
            name: result.item,
            image: getImagePath(result.item), // Use getImagePath for the winning item
            rarity: result.rarity || "common", // Assuming rarity is returned
            price: result.value // Assuming item_value is returned
        };

        if (!winningItemWithWear) {
            alert("Error: Could not determine winning item.");
            return;
        }

        populateReel(caseObj, winningItemWithWear); // Re-populate reel with winning item at the fixed landing spot

        // Calculate scroll position to center the winning item at the landing spot
        const containerWidth = unboxingReel.parentElement.offsetWidth;
        const targetScroll = (landingSpotIndex * itemWidth) - (containerWidth / 2) + (itemWidth / 2);
        const maxScroll = unboxingReel.scrollWidth - containerWidth;
        const scrollPosition = Math.max(0, Math.min(targetScroll, maxScroll));

        unboxingReel.style.transition = "none"; // Remove transition for instant reset
        unboxingReel.style.transform = `translateX(0)`; // Reset position
        
        // Force reflow to ensure the reset is applied before the new animation
        unboxingReel.offsetWidth; 

        // Spin fast for 3 seconds, then slow down for 2 seconds (total 5s)
        // Total spin duration will be 5.5 seconds (3s fast + 2.5s gradual slowdown)
        unboxingReel.style.transition = "transform 3s linear"; // Initial fast spin for 3 seconds
        unboxingReel.style.transform = `translateX(-${scrollPosition}px)`;

        setTimeout(() => {
            // Gradual slowdown for the last 2.5 seconds
            unboxingReel.style.transition = "transform 2.5s cubic-bezier(0.1, 0.7, 0.5, 1)";
            unboxingReel.style.transform = `translateX(-${scrollPosition}px)`; // Ensure it stays at the target

            setTimeout(() => {
                const popupItemImage = document.getElementById("popupItemImage");
                const popupItemName = document.getElementById("popupItemName");
                const popupItemValue = document.getElementById("popupItemValue");
                const unboxedItemPopup = document.getElementById("unboxedItemPopup");

                popupItemImage.src = winningItemWithWear.image;
                popupItemImage.alt = winningItemWithWear.name;
                popupItemName.textContent = winningItemWithWear.name;
                popupItemValue.textContent = `$${winningItemWithWear.price.toFixed(2)}`;

                unboxedItemPopup.classList.add("show");

                // Hide popup after a few seconds
                setTimeout(() => {
                    unboxedItemPopup.classList.remove("show");
                }, 3000); // Popup visible for 3 seconds

                // Add notification (simple console log for now, can be expanded)
                console.log(`You unboxed: ${winningItemWithWear.name} worth $${winningItemWithWear.price.toFixed(2)}!`);

            }, 2500); // After the gradual slowdown animation (2.5 seconds)
        }, 3000); // After the initial fast spin animation (3 seconds)

    } catch (error) {
        console.error("Error opening case:", error);
        alert(`An error occurred while opening the case: ${error.message}. Please try again.`);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await fetchCases(); // Ensure cases are fetched before proceeding

    const urlParams = new URLSearchParams(window.location.search);
    const caseId = urlParams.get("caseId");
    const selectedCase = getCaseById(caseId);

    if (selectedCase) {
        populateUnboxingPage(selectedCase);
        populateReel(selectedCase); // Populate reel with random items on page load
        document.getElementById("openCaseButton").addEventListener("click", () => startSpin(selectedCase));
        document.querySelector(".demo-spin-btn").addEventListener("click", () => startSpin(selectedCase)); // Demo spin uses same logic for now
    } else {
        document.querySelector(".unboxing-page").innerHTML = "<p>Case not found.</p>";
    }
});
