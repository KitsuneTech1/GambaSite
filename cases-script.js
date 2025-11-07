const API_BASE = "https://api.tryharderapi.lol";

export const caseData = [
    {
        id: "high-stakes",
        name: "High Stakes Case",
        price: 2.50,
        image: "all_skins_in_game/AK-47CaseHardened.png", // Using a placeholder image
        volatility: "High", // Added volatility
        drops: [
            // High-value skins
            { name: "AWP | Dragon Lore", image: "all_skins_in_game/AWPDragonLore.png", odds: 0.0005, rarity: "legendary", stattrak: false, wears: [{ condition: "Factory New", value: 2000.00, odds: 1.0 }] },
            { name: "AK-47 | Fire Serpent", image: "all_skins_in_game/AK-47FireSerpent.png", odds: 0.001, rarity: "legendary", stattrak: false, wears: [{ condition: "Factory New", value: 500.00, odds: 1.0 }] },
            { name: "AWP | Asiimov", image: "all_skins_in_game/AWPAsiimov.png", odds: 0.0025, rarity: "epic", stattrak: false, wears: [{ condition: "Factory New", value: 100.00, odds: 1.0 }] },
            { name: "AK-47 | Vulcan", image: "all_skins_in_game/AK-47Vulcan.png", odds: 0.006, rarity: "epic", stattrak: false, wears: [{ condition: "Factory New", value: 80.00, odds: 1.0 }] },
            // Low-value skins
            { name: "AK-47 | Safari Mesh", image: "all_skins_in_game/AK-47SafariMesh.png", odds: 0.09, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.01, odds: 1.0 }] },
            { name: "AUG | Colony", image: "all_skins_in_game/AUGColony.png", odds: 0.09, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.01, odds: 1.0 }] },
            { name: "AWP | Safari Mesh", image: "all_skins_in_game/AWPSafariMesh.png", odds: 0.09, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.01, odds: 1.0 }] },
            { name: "CZ75-Auto | Army Sheen", image: "all_skins_in_game/CZ75-AutoArmySheen.png", odds: 0.09, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.01, odds: 1.0 }] },
            { name: "Desert Eagle | Blue Ply", image: "all_skins_in_game/DesertEagleBluePly.png", odds: 0.09, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.01, odds: 1.0 }] },
            { name: "AK-47 | Jungle Spray", image: "all_skins_in_game/AK-47JungleSpray.png", odds: 0.09, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.01, odds: 1.0 }] },
            { name: "AUG | Contractor", image: "all_skins_in_game/AUGContractor.png", odds: 0.09, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.01, odds: 1.0 }] },
            { name: "CZ75-Auto | Tuxedo", image: "all_skins_in_game/CZ75-AutoTuxedo.png", odds: 0.09, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.01, odds: 1.0 }] },
            { name: "AK-47 | Predator", image: "all_skins_in_game/AK-47Predator.png", odds: 0.09, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.01, odds: 1.0 }] },
            { name: "AUG | Storm", image: "all_skins_in_game/AUGStorm.png", odds: 0.09, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.01, odds: 1.0 }] },
            { name: "AWP | Pit Viper", image: "all_skins_in_game/AWPPitViper.png", odds: 0.090, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.01, odds: 1.0 }] }
        ]
    },
    {
        id: "dreams-nightmares",
        name: "Dreams & Nightmares Case",
        price: 0.45,
        image: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9jb21tdW5pdHlfMzAuYzQ3MWEzZjc0YTI1NGM4MDc1NGY3ZGVlYzE5YWRhZjBkZjI2NmUyMy5wbmc-/auto/auto/85/notrim/21beb54cd2ee10122a102cbc870ee3e5.webp",
        volatility: "Low", // Added volatility
        drops: [
            { name: "AWP | Chromatic Aberration", image: "all_skins_in_game/AWPChromaticAberration.png", odds: 0.008, rarity: "legendary", stattrak: false, wears: [{ condition: "Factory New", value: 50.00, odds: 0.4 }, { condition: "Minimal Wear", value: 25.00, odds: 0.3 }, { condition: "Field-Tested", value: 10.00, odds: 0.2 }, { condition: "Well-Worn", value: 5.00, odds: 0.05 }, { condition: "Battle-Scarred", value: 2.00, odds: 0.05 }] },
            { name: "AK-47 | Neon Rider", image: "all_skins_in_game/AK-47NeonRider.png", odds: 0.01, rarity: "epic", stattrak: false, wears: [{ condition: "Factory New", value: 30.00, odds: 0.4 }, { condition: "Minimal Wear", value: 15.00, odds: 0.3 }, { condition: "Field-Tested", value: 8.00, odds: 0.2 }, { condition: "Well-Worn", value: 4.00, odds: 0.05 }, { condition: "Battle-Scarred", value: 2.00, odds: 0.05 }] },
            { name: "Desert Eagle | Code Red", image: "all_skins_in_game/DesertEagleCodeRed.png", odds: 0.015, rarity: "mythical", stattrak: false, wears: [{ condition: "Factory New", value: 20.00, odds: 0.4 }, { condition: "Minimal Wear", value: 10.00, odds: 0.3 }, { condition: "Field-Tested", value: 5.00, odds: 0.2 }, { condition: "Well-Worn", value: 2.50, odds: 0.05 }, { condition: "Battle-Scarred", value: 1.00, odds: 0.05 }] },
            { name: "AUG | Arctic Wolf", image: "all_skins_in_game/AUGArcticWolf.png", odds: 0.02, rarity: "very-rare", stattrak: false, wears: [{ condition: "Factory New", value: 10.00, odds: 0.4 }, { condition: "Minimal Wear", value: 5.00, odds: 0.3 }, { condition: "Field-Tested", value: 2.50, odds: 0.2 }, { condition: "Well-Worn", value: 1.00, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.50, odds: 0.05 }] },
            { name: "CZ75-Auto | Eco", image: "all_skins_in_game/CZ75-AutoEco.png", odds: 0.05, rarity: "rare-skin", stattrak: false, wears: [{ condition: "Factory New", value: 5.00, odds: 0.4 }, { condition: "Minimal Wear", value: 2.50, odds: 0.3 }, { condition: "Field-Tested", value: 1.00, odds: 0.2 }, { condition: "Well-Worn", value: 0.50, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.20, odds: 0.05 }] },
            { name: "AK-47 | Elite Build", image: "all_skins_in_game/AK-47EliteBuild.png", odds: 0.07, rarity: "uncommon-skin", stattrak: false, wears: [{ condition: "Factory New", value: 2.00, odds: 0.4 }, { condition: "Minimal Wear", value: 1.00, odds: 0.3 }, { condition: "Field-Tested", value: 0.50, odds: 0.2 }, { condition: "Well-Worn", value: 0.20, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.10, odds: 0.05 }] },
            { name: "AWP | Safari Mesh", image: "all_skins_in_game/AWPSafariMesh.png", odds: 0.875, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.10, odds: 0.4 }, { condition: "Minimal Wear", value: 0.05, odds: 0.3 }, { condition: "Field-Tested", value: 0.03, odds: 0.2 }, { condition: "Well-Worn", value: 0.02, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.01, odds: 0.05 }] }
        ]
    },
    {
        id: "fracture",
        name: "Fracture Case",
        price: 0.42,
        image: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9jb21tdW5pdHlfMjYuYjI1MDk4YWY1YTQyODUwMDQwNTI3ODZlMjYxYmU0M2RlYzViODljZi5wbmc-/auto/auto/85/notrim/7130235e21e92d11f1ea81fa677cf379.webp",
        volatility: "Low", // Added volatility
        drops: [
            { name: "AK-47 | Legion of Anubis", image: "all_skins_in_game/AK-47LegionofAnubis.png", odds: 0.008, rarity: "legendary", stattrak: false, wears: [{ condition: "Factory New", value: 50.00, odds: 0.4 }, { condition: "Minimal Wear", value: 25.00, odds: 0.3 }, { condition: "Field-Tested", value: 10.00, odds: 0.2 }, { condition: "Well-Worn", value: 5.00, odds: 0.05 }, { condition: "Battle-Scarred", value: 2.00, odds: 0.05 }] },
            { name: "Desert Eagle | Emerald Jörmungandr", image: "all_skins_in_game/DesertEagleEmeraldJörmungandr.png", odds: 0.01, rarity: "epic", stattrak: false, wears: [{ condition: "Factory New", value: 30.00, odds: 0.4 }, { condition: "Minimal Wear", value: 15.00, odds: 0.3 }, { condition: "Field-Tested", value: 8.00, odds: 0.2 }, { condition: "Well-Worn", value: 4.00, odds: 0.05 }, { condition: "Battle-Scarred", value: 2.00, odds: 0.05 }] },
            { name: "AWP | Mortis", image: "all_skins_in_game/AWPMortis.png", odds: 0.015, rarity: "mythical", stattrak: false, wears: [{ condition: "Factory New", value: 20.00, odds: 0.4 }, { condition: "Minimal Wear", value: 10.00, odds: 0.3 }, { condition: "Field-Tested", value: 5.00, odds: 0.2 }, { condition: "Well-Worn", value: 2.50, odds: 0.05 }, { condition: "Battle-Scarred", value: 1.00, odds: 0.05 }] },
            { name: "AUG | Syd Mead", image: "all_skins_in_game/AUGSydMead.png", odds: 0.02, rarity: "very-rare", stattrak: false, wears: [{ condition: "Factory New", value: 10.00, odds: 0.4 }, { condition: "Minimal Wear", value: 5.00, odds: 0.3 }, { condition: "Field-Tested", value: 2.50, odds: 0.2 }, { condition: "Well-Worn", value: 1.00, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.50, odds: 0.05 }] },
            { name: "CZ75-Auto | Tigris", image: "all_skins_in_game/CZ75-AutoTigris.png", odds: 0.05, rarity: "rare-skin", stattrak: false, wears: [{ condition: "Factory New", value: 5.00, odds: 0.4 }, { condition: "Minimal Wear", value: 2.50, odds: 0.3 }, { condition: "Field-Tested", value: 1.00, odds: 0.2 }, { condition: "Well-Worn", value: 0.50, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.20, odds: 0.05 }] },
            { name: "AK-47 | Safari Mesh", image: "all_skins_in_game/AK-47SafariMesh.png", odds: 0.07, rarity: "uncommon-skin", stattrak: false, wears: [{ condition: "Factory New", value: 2.00, odds: 0.4 }, { condition: "Minimal Wear", value: 1.00, odds: 0.3 }, { condition: "Field-Tested", value: 0.50, odds: 0.2 }, { condition: "Well-Worn", value: 0.20, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.10, odds: 0.05 }] },
            { name: "AWP | Pit Viper", image: "all_skins_in_game/AWPPitViper.png", odds: 0.875, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.10, odds: 0.4 }, { condition: "Minimal Wear", value: 0.05, odds: 0.3 }, { condition: "Field-Tested", value: 0.03, odds: 0.2 }, { condition: "Well-Worn", value: 0.02, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.01, odds: 0.05 }] }
        ]
    },
    {
        id: "operation-breakout-weapon",
        name: "Operation Breakout Weapon Case",
        price: 9.46,
        image: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9jb21tdW5pdHlfNC5mMGQyMzg0ODUyN2I3YmUwZjFmYzk1NTZiMWYzZWNmYjExOTNlZTQwLnBuZw--/auto/auto/85/notrim/bdca454652af3fa481e82915701f0470.webp",
        volatility: "Low", // Added volatility
        drops: [
            { name: "AWP | Asiimov", image: "all_skins_in_game/AWPAsiimov.png", odds: 0.008, rarity: "legendary", stattrak: false, wears: [{ condition: "Factory New", value: 50.00, odds: 0.4 }, { condition: "Minimal Wear", value: 25.00, odds: 0.3 }, { condition: "Field-Tested", value: 10.00, odds: 0.2 }, { condition: "Well-Worn", value: 5.00, odds: 0.05 }, { condition: "Battle-Scarred", value: 2.00, odds: 0.05 }] },
            { name: "AK-47 | Redline", image: "all_skins_in_game/AK-47Redline.png", odds: 0.01, rarity: "epic", stattrak: false, wears: [{ condition: "Factory New", value: 30.00, odds: 0.4 }, { condition: "Minimal Wear", value: 15.00, odds: 0.3 }, { condition: "Field-Tested", value: 8.00, odds: 0.2 }, { condition: "Well-Worn", value: 4.00, odds: 0.05 }, { condition: "Battle-Scarred", value: 2.00, odds: 0.05 }] },
            { name: "Desert Eagle | Hypnotic", image: "all_skins_in_game/DesertEagleHypnotic.png", odds: 0.015, rarity: "mythical", stattrak: false, wears: [{ condition: "Factory New", value: 20.00, odds: 0.4 }, { condition: "Minimal Wear", value: 10.00, odds: 0.3 }, { condition: "Field-Tested", value: 5.00, odds: 0.2 }, { condition: "Well-Worn", value: 2.50, odds: 0.05 }, { condition: "Battle-Scarred", value: 1.00, odds: 0.05 }] },
            { name: "AUG | Torque", image: "all_skins_in_game/AUGTorque.png", odds: 0.02, rarity: "very-rare", stattrak: false, wears: [{ condition: "Factory New", value: 10.00, odds: 0.4 }, { condition: "Minimal Wear", value: 5.00, odds: 0.3 }, { condition: "Field-Tested", value: 2.50, odds: 0.2 }, { condition: "Well-Worn", value: 1.00, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.50, odds: 0.05 }] },
            { name: "CZ75-Auto | Crimson Web", image: "all_skins_in_game/CZ75-AutoCrimsonWeb.png", odds: 0.05, rarity: "rare-skin", stattrak: false, wears: [{ condition: "Factory New", value: 5.00, odds: 0.4 }, { condition: "Minimal Wear", value: 2.50, odds: 0.3 }, { condition: "Field-Tested", value: 1.00, odds: 0.2 }, { condition: "Well-Worn", value: 0.50, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.20, odds: 0.05 }] },
            { name: "AK-47 | Blue Laminate", image: "all_skins_in_game/AK-47BlueLaminate.png", odds: 0.07, rarity: "uncommon-skin", stattrak: false, wears: [{ condition: "Factory New", value: 2.00, odds: 0.4 }, { condition: "Minimal Wear", value: 1.00, odds: 0.3 }, { condition: "Field-Tested", value: 0.50, odds: 0.2 }, { condition: "Well-Worn", value: 0.20, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.10, odds: 0.05 }] },
            { name: "AWP | Pit Viper", image: "all_skins_in_game/AWPPitViper.png", odds: 0.875, rarity: "common-skin", stattrak: false, wears: [{ condition: "Factory New", value: 0.10, odds: 0.4 }, { condition: "Minimal Wear", value: 0.05, odds: 0.3 }, { condition: "Field-Tested", value: 0.03, odds: 0.2 }, { condition: "Well-Worn", value: 0.02, odds: 0.05 }, { condition: "Battle-Scarred", value: 0.01, odds: 0.05 }] }
        ]
    },
    /*
    {
        id: "sealed-genesis-terminal",
        name: "Sealed Genesis Terminal",
        price: 0.56,
        image: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9jb21tdW5pdHlfMzYfY2xvc2VkLjVkZTNlMTA3OTA4YzJjMjFjOTUxYzZmYmY0MjM0MzllNzg4NjRjMjgucG5n-/auto/auto/85/notrim/db34dfcee586d1dcbb8b438a6293456c.webp",
        drops: [
            { name: "Rare Item", image: "https://via.placeholder.com/50x30/ff00ff/ffffff?text=Rare", odds: 0.002, value: 100.00, rarity: "rare" },
            { name: "Legendary Item", image: "https://via.placeholder.com/50x30/ff4500/ffffff?text=Legend", odds: 0.008, value: 50.00, rarity: "legendary" },
            { name: "Epic Item", image: "https://via.placeholder.com/50x30/ffa500/ffffff?text=Epic", odds: 0.01, value: 30.00, rarity: "epic" },
            { name: "Mythical Item", image: "https://via.placeholder.com/50x30/ff8c00/ffffff?text=Mythic", odds: 0.015, value: 20.00, rarity: "mythical" },
            { name: "Very Rare Item", image: "https://via.placeholder.com/50x30/ffd700/ffffff?text=V.Rare", odds: 0.02, value: 10.00, rarity: "very-rare" },
            { name: "Rare Skin", image: "https://via.placeholder.com/50x30/ffff00/ffffff?text=RareS", odds: 0.05, value: 5.00, rarity: "rare-skin" },
            { name: "Uncommon Skin", image: "https://via.placeholder.com/50x30/adff2f/ffffff?text=UncomS", odds: 0.07, value: 2.00, rarity: "uncommon-skin" },
            { name: "Common Skin", image: "https://via.placeholder.com/50x30/808080/ffffff?text=CommonS", odds: 0.875, value: 0.10, rarity: "common-skin" }
        ]
    }
    */
];

function calculateRTP(caseObj) {
    let expectedValue = 0;
    let totalDropOdds = 0;

    caseObj.drops.forEach(drop => {
        if (drop.wears) {
            let wearExpectedValue = 0;
            let totalWearOdds = 0;
            drop.wears.forEach(wear => {
                wearExpectedValue += wear.odds * wear.value;
                totalWearOdds += wear.odds;
            });
            // Normalize wear odds to sum to 1
            drop.wears.forEach(wear => {
                wear.odds /= totalWearOdds;
            });
            expectedValue += drop.odds * wearExpectedValue;
        } else {
            expectedValue += drop.odds * drop.value;
        }
        totalDropOdds += drop.odds;
    });

    // Adjust drop odds to ensure totalDropOdds is 1 and RTP is 90%
    const scaleFactor = (0.90 * caseObj.price) / expectedValue;
    caseObj.drops.forEach(drop => {
        drop.odds *= scaleFactor;
    });

    // Recalculate total drop odds after scaling
    totalDropOdds = caseObj.drops.reduce((sum, drop) => sum + drop.odds, 0);

    // Normalize drop odds to sum to 1
    caseObj.drops.forEach(drop => {
        drop.odds /= totalDropOdds;
    });

    // Recalculate expected value with normalized odds
    expectedValue = 0;
    caseObj.drops.forEach(drop => {
        if (drop.wears) {
            let wearExpectedValue = 0;
            drop.wears.forEach(wear => {
                wearExpectedValue += wear.odds * wear.value;
            });
            expectedValue += drop.odds * wearExpectedValue;
        } else {
            expectedValue += drop.odds * drop.value;
        }
    });

    return (expectedValue / caseObj.price * 100).toFixed(2);
}

function generateCaseCard(caseObj) {
    const rtp = "90.00"; // Hardcode RTP for display as requested by the user

    const dropItemsHtml = caseObj.drops.map(drop => {
        const dropValue = drop.wears ? drop.wears[0].value : drop.value; // Assuming first wear value for display if wears exist

        return `
            <div class="drop-item">
                <img src="${drop.image}" alt="${drop.name}">
                <p class="drop-price">$${dropValue.toFixed(2)}</p>
            </div>
        `;
    }).join('');

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
            const response = await fetch(`${API_BASE}/crate/list`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            allCases = await response.json();
            applyFilters(); // Render cases after fetching
        } catch (error) {
            console.error("Error fetching cases:", error);
            // Fallback to local caseData if API fails
            allCases = [...caseData];
            applyFilters();
        }
    }

    // Determine the maximum price from caseData for slider max value
    const maxCasePrice = Math.max(...caseData.map(c => c.price));
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
