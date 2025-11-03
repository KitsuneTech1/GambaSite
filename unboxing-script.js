let currentBalanceCoins = 1000;
let currentBalanceGems = 0;
let useGems = false; // false for coins, true for gems

function updateBalanceDisplay() {
    document.querySelector('.balance .balance-amount').textContent = useGems ? currentBalanceGems.toFixed(0) : currentBalanceCoins.toFixed(2);
    document.querySelector('.balance .coin-icon').style.display = useGems ? 'none' : 'inline-block';
    document.querySelector('.balance .gem-icon').style.display = useGems ? 'inline-block' : 'none';
}

function getCaseById(caseId) {
    return caseData.find(c => c.id === caseId);
}

function calculateRTP(caseObj) {
    let expectedValue = 0;
    let totalOdds = 0;
    caseObj.drops.forEach(drop => {
        expectedValue += drop.odds * drop.value;
        totalOdds += drop.odds;
    });
    // Adjust odds to ensure totalOdds is 1 and RTP is 90%
    const scaleFactor = 0.90 * caseObj.price / expectedValue;
    caseObj.drops.forEach(drop => {
        drop.odds *= scaleFactor;
    });
    // Recalculate total odds after scaling
    totalOdds = caseObj.drops.reduce((sum, drop) => sum + drop.odds, 0);
    // Normalize odds to sum to 1
    caseObj.drops.forEach(drop => {
        drop.odds /= totalOdds;
    });

    // Recalculate expected value with normalized odds
    expectedValue = caseObj.drops.reduce((sum, drop) => sum + drop.odds * drop.value, 0);
    return (expectedValue / caseObj.price * 100).toFixed(2);
}

function populateUnboxingPage(caseObj) {
    document.getElementById('caseImage').src = caseObj.image;
    document.getElementById('caseName').textContent = caseObj.name;
    document.getElementById('caseRTP').textContent = `${calculateRTP(caseObj)}% RTP`;
    document.getElementById('openCasePrice').textContent = caseObj.price.toFixed(2);

    const caseDropsList = document.getElementById('caseDropsList');
    caseDropsList.innerHTML = ''; // Clear previous drops

    caseObj.drops.forEach(drop => {
        const dropItemHtml = `
            <div class="drop-item-sidebar rarity-${drop.rarity}">
                <img src="${drop.image}" alt="${drop.name}">
                <p>${drop.name}</p>
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
        items.push(caseObj.drops[Math.floor(Math.random() * caseObj.drops.length)]);
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

function startSpin(caseObj) {
    if (useGems && currentBalanceGems < caseObj.price) {
        alert('Not enough gems!');
        return;
    }
    if (!useGems && currentBalanceCoins < caseObj.price) {
        alert('Not enough coins!');
        return;
    }

    if (useGems) {
        currentBalanceGems -= caseObj.price;
    } else {
        currentBalanceCoins -= caseObj.price;
    }
    updateBalanceDisplay();

    // Determine the winning item based on odds
    const randomValue = Math.random();
    let cumulativeOdds = 0;
    let winningItem = null;
    for (const drop of caseObj.drops) {
        cumulativeOdds += drop.odds;
        if (randomValue <= cumulativeOdds) {
            winningItem = drop;
            break;
        }
    }
    if (!winningItem) { // Fallback if no item is selected (shouldn't happen with correct odds)
        winningItem = caseObj.drops[caseObj.drops.length - 1];
    }

    populateReel(caseObj, winningItem); // Re-populate reel with winning item at the fixed landing spot

    // Calculate scroll position to center the winning item at the landing spot
    const containerWidth = unboxingReel.parentElement.offsetWidth;
    const targetScroll = (landingSpotIndex * itemWidth) - (containerWidth / 2) + (itemWidth / 2);
    const maxScroll = unboxingReel.scrollWidth - containerWidth;
    const scrollPosition = Math.max(0, Math.min(targetScroll, maxScroll));

    unboxingReel.style.transition = 'none'; // Remove transition for instant reset
    unboxingReel.style.transform = `translateX(0)`; // Reset position
    
    // Force reflow to ensure the reset is applied before the new animation
    unboxingReel.offsetWidth; 

    // Spin fast for 3 seconds, then slow down for 2 seconds (total 5s)
    unboxingReel.style.transition = 'transform 5s cubic-bezier(0.1, 0.7, 0.5, 1)'; // Fast start, then slow down
    unboxingReel.style.transform = `translateX(-${scrollPosition}px)`;

    setTimeout(() => {
        alert(`You unboxed: ${winningItem.name} (Value: ${winningItem.value.toFixed(2)})`);
        // Add value to balance
        if (useGems) {
            currentBalanceGems += winningItem.value;
        } else {
            currentBalanceCoins += winningItem.value;
        }
        updateBalanceDisplay();
    }, 5000); // After the spin animation (5 seconds)
}

document.addEventListener('DOMContentLoaded', () => {
    updateBalanceDisplay();

    const urlParams = new URLSearchParams(window.location.search);
    const caseId = urlParams.get('caseId');
    const selectedCase = getCaseById(caseId);

    if (selectedCase) {
        populateUnboxingPage(selectedCase);
        populateReel(selectedCase); // Populate reel with random items on page load
        document.getElementById('openCaseButton').addEventListener('click', () => startSpin(selectedCase));
        document.querySelector('.demo-spin-btn').addEventListener('click', () => startSpin(selectedCase)); // Demo spin uses same logic for now
    } else {
        document.querySelector('.unboxing-page').innerHTML = '<p>Case not found.</p>';
    }

    // Currency toggle functionality
    const balanceElement = document.querySelector('.header-right .balance');
    balanceElement.addEventListener('click', () => {
        useGems = !useGems;
        updateBalanceDisplay();
    });
});
