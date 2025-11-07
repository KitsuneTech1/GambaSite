

import { caseData } from './cases-script.js';

function getCaseById(caseId) {
    return caseData.find(c => c.id === caseId);
}


function populateUnboxingPage(caseObj) {
    document.getElementById('caseImage').src = caseObj.image;
    document.getElementById('caseName').textContent = caseObj.name;
    document.getElementById('caseRTP').textContent = `90% RTP`; // Hardcode RTP for display as requested by the user
    document.getElementById('openCasePrice').textContent = caseObj.price.toFixed(2);

    const caseDropsList = document.getElementById('caseDropsList');
    caseDropsList.innerHTML = ''; // Clear previous drops

    caseObj.drops.forEach(drop => {
        const dropValue = drop.wears ? drop.wears[0].value : drop.value; // Assuming first wear value for display if wears exist
        const dropItemHtml = `
            <div class="drop-item-sidebar rarity-${drop.rarity}">
                <img src="${drop.image}" alt="${drop.name}">
                <p>${drop.name}</p>
                <p class="drop-price">$${dropValue.toFixed(2)}</p>
                <p class="drop-odds">${(drop.odds * 100).toFixed(2)}%</p>
            </div>
        `;
        caseDropsList.insertAdjacentHTML('beforeend', dropItemHtml);
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
        // Select a random drop and then a random wear for it
        const randomDrop = caseObj.drops[Math.floor(Math.random() * caseObj.drops.length)];
        let displayItem = { ...randomDrop }; // Clone to avoid modifying original drop object

        // Only include image and name for spinning items
        items.push({
            name: displayItem.name,
            image: displayItem.image,
            rarity: displayItem.rarity
        });
    }

    // If a winning item is provided, place it at the landing spot
    if (winningItem) {
        items[landingSpotIndex] = winningItem;
    }

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item', `rarity-${item.rarity}`);
        // Only display image and name for spinning items
        itemElement.innerHTML = `<img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
        unboxingReel.appendChild(itemElement);
    });
}

const API_BASE = "https://api.tryharderapi.lol";

async function startSpin(caseObj) {
    const steamid = localStorage.getItem("steamid");
    if (!steamid) {
        alert("Please log in to open cases.");
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/crate/open`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
            },
            body: JSON.stringify({
                caseId: caseObj.id,
                steamid: steamid
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert(`Error opening case: ${errorData.message || response.statusText}`);
            return;
        }

        const result = await response.json();
        const winningItemWithWear = result.unboxedItem;

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
        unboxingReel.style.transition = "transform 3s linear"; // Fast spin for 3 seconds
        unboxingReel.style.transform = `translateX(-${scrollPosition}px)`;

        setTimeout(() => {
            unboxingReel.style.transition = "transform 2s cubic-bezier(0.1, 0.7, 0.5, 1)"; // Slow down for 2 seconds
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

            }, 1000); // After the slow down animation (1 second)
        }, 3000); // After the fast spin animation (3 seconds)

    } catch (error) {
        console.error("Error opening case:", error);
        alert("An error occurred while opening the case. Please try again.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
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
