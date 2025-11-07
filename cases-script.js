const API_BASE = "https://api.tryharderapi.lol";

export const caseData = [
    {
        id: "dust-dweller",
        name: "Dust Dweller Case",
        price: 0.10,
        currency: "COIN",
        volatility: "Low",
        image: "/all_skins_in_game/P2000AmberFade.png", // Most valuable skin in this case
        drops: [
            {"name": "P2000 | Amber Fade", "image": "/all_skins_in_game/P2000AmberFade.png", "odds": 0.20, "value": 0.035},
            {"name": "MP9 | Sand Scale", "image": "/all_skins_in_game/MP9SandScale.png", "odds": 0.18, "value": 0.05},
            {"name": "Nova | Sand Dune", "image": "/all_skins_in_game/NovaSandDune.png", "odds": 0.15, "value": 0.07},
            {"name": "G3SG1 | Desert Storm", "image": "/all_skins_in_game/G3SG1DesertStorm.png", "odds": 0.12, "value": 0.085},
            {"name": "UMP-45 | Scorched", "image": "/all_skins_in_game/UMP-45Scorched.png", "odds": 0.10, "value": 0.10},
            {"name": "Dual Berettas | Stained", "image": "/all_skins_in_game/DualBerettasStained.png", "odds": 0.08, "value": 0.12},
            {"name": "PP-Bizon | Sand Dashed", "image": "/all_skins_in_game/PP-BizonSandDashed.png", "odds": 0.07, "value": 0.14},
            {"name": "Sawed-Off | Sage Spray", "image": "/all_skins_in_game/Sawed-OffSageSpray.png", "odds": 0.05, "value": 0.155},
            {"name": "Negev | Army Sheen", "image": "/all_skins_in_game/NegevArmySheen.png", "odds": 0.03, "value": 0.17},
            {"name": "M249 | Gator Mesh", "image": "/all_skins_in_game/M249GatorMesh.png", "odds": 0.02, "value": 0.26},
        ]
    },
    {
        id: "cobblestone-cache",
        name: "Cobblestone Cache",
        price: 0.25,
        currency: "COIN",
        volatility: "Low",
        image: "all_skins_in_game/Tec-9ArmySheen.png", // Most valuable skin in this case
        drops: [
            {"name": "Five-SeveN | Urban Hazard", "image": "all_skins_in_game/Five-SeveNUrbanHazard.png", "odds": 0.20, "value": 0.075},
            {"name": "MP7 | Urban Hazard", "image": "all_skins_in_game/MP7UrbanHazard.png", "odds": 0.18, "value": 0.105},
            {"name": "Galil AR | Urban Rubble", "image": "all_skins_in_game/GalilARUrbanRubble.png", "odds": 0.15, "value": 0.15},
            {"name": "FAMAS | Colony", "image": "all_skins_in_game/FAMASColony.png", "odds": 0.12, "value": 0.18},
            {"name": "P90 | Sand Spray", "image": "all_skins_in_game/P90SandSpray.png", "odds": 0.10, "value": 0.225},
            {"name": "SSG 08 | Sand Dune", "image": "all_skins_in_game/SSG08SandDune.png", "odds": 0.08, "value": 0.30},
            {"name": "XM1014 | Urban Perforated", "image": "all_skins_in_game/XM1014UrbanPerforated.png", "odds": 0.07, "value": 0.375},
            {"name": "CZ75-Auto | Army Sheen", "image": "all_skins_in_game/CZ75-AutoArmySheen.png", "odds": 0.05, "value": 0.45},
            {"name": "MAG-7 | Sand Dune", "image": "all_skins_in_game/MAG-7SandDune.png", "odds": 0.03, "value": 0.60},
            {"name": "Tec-9 | Army Sheen", "image": "all_skins_in_game/Tec-9ArmySheen.png", "odds": 0.02, "value": 0.75},
        ]
    },
    {
        id: "inferno-blaze",
        name: "Inferno Blaze Case",
        price: 0.50,
        currency: "COIN",
        volatility: "Medium",
        image: "all_skins_in_game/M4A4Hellfire.png", // Most valuable skin in this case
        drops: [
            {"name": "Glock-18 | High Beam", "image": "all_skins_in_game/Glock-18HighBeam.png", "odds": 0.20, "value": 0.055},
            {"name": "MP9 | Hot Rod", "image": "all_skins_in_game/MP9HotRod.png", "odds": 0.18, "value": 0.11},
            {"name": "Nova | Blaze", "image": "all_skins_in_game/NovaBlaze.png", "odds": 0.15, "value": 0.165},
            {"name": "P250 | Inferno", "image": "all_skins_in_game/P250Inferno.png", "odds": 0.12, "value": 0.22},
            {"name": "Galil AR | Firefight", "image": "all_skins_in_game/GalilARFirefight.png", "odds": 0.10, "value": 0.275},
            {"name": "M4A1-S | Flashback", "image": "all_skins_in_game/M4A1-SFlashback.png", "odds": 0.08, "value": 0.41},
            {"name": "AK-47 | Redline", "image": "all_skins_in_game/AK-47Redline.png", "odds": 0.07, "value": 0.55},
            {"name": "AWP | Fever Dream", "image": "all_skins_in_game/AWPFeverDream.png", "odds": 0.05, "value": 1.10},
            {"name": "Desert Eagle | Blaze", "image": "all_skins_in_game/DesertEagleBlaze.png", "odds": 0.03, "value": 2.75},
            {"name": "M4A4 | Hellfire", "image": "all_skins_in_game/M4A4Hellfire.png", "odds": 0.02, "value": 5.50},
        ]
    },
    {
        id: "mirage-mystery",
        name: "Mirage Mystery Case",
        price: 0.75,
        currency: "COIN",
        volatility: "Medium",
        image: "all_skins_in_game/KarambitDoppler(Phase2).png", // Most valuable skin in this case
        drops: [
            {"name": "USP-S | Cortex", "image": "all_skins_in_game/USP-SCortex.png", "odds": 0.20, "value": 0.06},
            {"name": "MAC-10 | Neon Rider", "image": "all_skins_in_game/MAC-10NeonRider.png", "odds": 0.18, "value": 0.12},
            {"name": "MP5-SD | Phosphor", "image": "all_skins_in_game/MP5-SDPhosphor.png", "odds": 0.15, "value": 0.18},
            {"name": "FAMAS | Roll Cage", "image": "all_skins_in_game/FAMASRollCage.png", "odds": 0.12, "value": 0.24},
            {"name": "P2000 | Imperial Dragon", "image": "all_skins_in_game/P2000ImperialDragon.png", "odds": 0.10, "value": 0.30},
            {"name": "SSG 08 | Dragonfire", "image": "all_skins_in_game/SSG08Dragonfire.png", "odds": 0.08, "value": 0.40},
            {"name": "AWP | Hyper Beast", "image": "all_skins_in_game/AWPHyperBeast.png", "odds": 0.07, "value": 1.00},
            {"name": "AK-47 | Neon Rider", "image": "all_skins_in_game/AK-47NeonRider.png", "odds": 0.05, "value": 2.00},
            {"name": "M4A4 | Neo-Noir", "image": "all_skins_in_game/M4A4Neo-Noir.png", "odds": 0.03, "value": 4.00},
            {"name": "Karambit | Doppler (Phase 2)", "image": "all_skins_in_game/KarambitDoppler(Phase2).png", "odds": 0.02, "value": 10.00},
        ]
    },
    {
        id: "nuke-nuclear",
        name: "Nuke Nuclear Case",
        price: 1.00,
        currency: "COIN",
        volatility: "Medium",
        image: "all_skins_in_game/M4A4RadiationHazard.png", // Most valuable skin in this case
        drops: [
            {"name": "Glock-18 | Nuclear Garden", "image": "all_skins_in_game/Glock-18NuclearGarden.png", "odds": 0.20, "value": 0.09},
            {"name": "MP9 | Nuclear Threat", "image": "all_skins_in_game/MP9NuclearThreat.png", "odds": 0.18, "value": 0.18},
            {"name": "Nova | Nuclear Threat", "image": "all_skins_in_game/NovaNuclearThreat.png", "odds": 0.15, "value": 0.27},
            {"name": "P250 | Nuclear Threat", "image": "all_skins_in_game/P250NuclearThreat.png", "odds": 0.12, "value": 0.36},
            {"name": "Galil AR | Nuclear Threat", "image": "all_skins_in_game/GalilARNuclearThreat.png", "odds": 0.10, "value": 0.45},
            {"name": "M4A1-S | Atomic Alloy", "image": "all_skins_in_game/M4A1-SAtomicAlloy.png", "odds": 0.08, "value": 0.68},
            {"name": "AK-47 | Wasteland Rebel", "image": "all_skins_in_game/AK-47WastelandRebel.png", "odds": 0.07, "value": 1.35},
            {"name": "AWP | Containment Breach", "image": "all_skins_in_game/AWPContainmentBreach.png", "odds": 0.05, "value": 2.70},
            {"name": "Desert Eagle | Code Red", "image": "all_skins_in_game/DesertEagleCodeRed.png", "odds": 0.03, "value": 5.40},
            {"name": "M4A4 | Radiation Hazard", "image": "all_skins_in_game/M4A4RadiationHazard.png", "odds": 0.02, "value": 11.25},
        ]
    },
    {
        id: "vertigo-vault",
        name: "Vertigo Vault Case",
        price: 1.50,
        currency: "COIN",
        volatility: "High",
        image: "all_skins_in_game/ButterflyKnifeFade.png", // Most valuable skin in this case
        drops: [
            {"name": "USP-S | Blueprint", "image": "all_skins_in_game/USP-SBlueprint.png", "odds": 0.20, "value": 0.13},
            {"name": "MAC-10 | Blueprint", "image": "all_skins_in_game/MAC-10Blueprint.png", "odds": 0.18, "value": 0.265},
            {"name": "MP5-SD | Blueprint", "image": "all_skins_in_game/MP5-SDBlueprint.png", "odds": 0.15, "value": 0.40},
            {"name": "FAMAS | Blueprint", "image": "all_skins_in_game/FAMASBlueprint.png", "odds": 0.12, "value": 0.53},
            {"name": "P2000 | Blueprint", "image": "all_skins_in_game/P2000Blueprint.png", "odds": 0.10, "value": 0.66},
            {"name": "SSG 08 | Blueprint", "image": "all_skins_in_game/SSG08Blueprint.png", "odds": 0.08, "value": 0.88},
            {"name": "AWP | Graphite", "image": "all_skins_in_game/AWPGraphite.png", "odds": 0.07, "value": 1.77},
            {"name": "AK-47 | Frontside Misty", "image": "all_skins_in_game/AK-47FrontsideMisty.png", "odds": 0.05, "value": 3.53},
            {"name": "M4A4 | The Emperor", "image": "all_skins_in_game/M4A4TheEmperor.png", "odds": 0.03, "value": 6.62},
            {"name": "Butterfly Knife | Fade", "image": "all_skins_in_game/ButterflyKnifeFade.png", "odds": 0.02, "value": 22.00},
        ]
    },
    {
        id: "ancient-artifact",
        name: "Ancient Artifact Case",
        price: 2.00,
        currency: "COIN",
        volatility: "High",
        image: "all_skins_in_game/KarambitGammaDoppler(Emerald).png", // Most valuable skin in this case
        drops: [
            {"name": "Glock-18 | Water Elemental", "image": "all_skins_in_game/Glock-18WaterElemental.png", "odds": 0.20, "value": 0.16},
            {"name": "MP9 | Hydra", "image": "all_skins_in_game/MP9Hydra.png", "odds": 0.18, "value": 0.315},
            {"name": "Nova | Bloomstick", "image": "all_skins_in_game/NovaBloomstick.png", "odds": 0.15, "value": 0.475},
            {"name": "P250 | See Ya Later", "image": "all_skins_in_game/P250SeeYaLater.png", "odds": 0.12, "value": 0.63},
            {"name": "Galil AR | Cerberus", "image": "all_skins_in_game/GalilARCerberus.png", "odds": 0.10, "value": 0.79},
            {"name": "M4A1-S | Golden Coil", "image": "all_skins_in_game/M4A1-SGoldenCoil.png", "odds": 0.08, "value": 1.18},
            {"name": "AK-47 | Aquamarine Revenge", "image": "all_skins_in_game/AK-47AquamarineRevenge.png", "odds": 0.07, "value": 2.37},
            {"name": "AWP | Gungnir", "image": "all_skins_in_game/AWPGungnir.png", "odds": 0.05, "value": 4.74},
            {"name": "Desert Eagle | Emerald Jörmungandr", "image": "all_skins_in_game/DesertEagleEmeraldJörmungandr.png", "odds": 0.03, "value": 9.85},
            {"name": "Karambit | Gamma Doppler (Emerald)", "image": "all_skins_in_game/KarambitGammaDoppler(Emerald).png", "odds": 0.02, "value": 29.60},
        ]
    },
    {
        id: "overpass-overhaul",
        name: "Overpass Overhaul Case",
        price: 2.50,
        currency: "COIN",
        volatility: "High",
        image: "all_skins_in_game/M9BayonetDoppler(Sapphire).png", // Most valuable skin in this case
        drops: [
            {"name": "USP-S | Kill Confirmed", "image": "all_skins_in_game/USP-SKillConfirmed.png", "odds": 0.20, "value": 0.20},
            {"name": "MAC-10 | Gold Brick", "image": "all_skins_in_game/MAC-10GoldBrick.png", "odds": 0.18, "value": 0.40},
            {"name": "MP5-SD | Agent", "image": "all_skins_in_game/MP5-SDAgent.png", "odds": 0.15, "value": 0.60},
            {"name": "FAMAS | Commemoration", "image": "all_skins_in_game/FAMASCommemoration.png", "odds": 0.12, "value": 0.80},
            {"name": "P2000 | Ocean Foam", "image": "all_skins_in_game/P2000OceanFoam.png", "odds": 0.10, "value": 1.00},
            {"name": "SSG 08 | Blood in the Water", "image": "all_skins_in_game/SSG08BloodintheWater.png", "odds": 0.08, "value": 1.40},
            {"name": "AWP | Wildfire", "image": "all_skins_in_game/AWPWildfire.png", "odds": 0.07, "value": 2.80},
            {"name": "AK-47 | Vulcan", "image": "all_skins_in_game/AK-47Vulcan.png", "odds": 0.05, "value": 5.60},
            {"name": "M4A4 | Asiimov", "image": "all_skins_in_game/M4A4Asiimov.png", "odds": 0.03, "value": 11.20},
            {"name": "M9 Bayonet | Doppler (Sapphire)", "image": "all_skins_in_game/M9BayonetDoppler(Sapphire).png", "odds": 0.02, "value": 40.00},
        ]
    },
    {
        id: "cache-contraband",
        name: "Cache Contraband Case",
        price: 3.00,
        currency: "COIN",
        volatility: "High",
        image: "all_skins_in_game/TalonKnifeMarbleFade.png", // Most valuable skin in this case
        drops: [
            {"name": "Glock-18 | Fade", "image": "all_skins_in_game/Glock-18Fade.png", "odds": 0.20, "value": 0.23},
            {"name": "MP9 | Stained Glass", "image": "all_skins_in_game/MP9StainedGlass.png", "odds": 0.18, "value": 0.465},
            {"name": "Nova | Antique", "image": "all_skins_in_game/NovaAntique.png", "odds": 0.15, "value": 0.70},
            {"name": "P250 | Cartel", "image": "all_skins_in_game/P250Cartel.png", "odds": 0.12, "value": 0.93},
            {"name": "Galil AR | Sugar Rush", "image": "all_skins_in_game/GalilARSugarRush.png", "odds": 0.10, "value": 1.165},
            {"name": "M4A1-S | Cyrex", "image": "all_skins_in_game/M4A1-SCyrex.png", "odds": 0.08, "value": 1.75},
            {"name": "AK-47 | Case Hardened", "image": "all_skins_in_game/AK-47CaseHardened.png", "odds": 0.07, "value": 3.50},
            {"name": "AWP | Lightning Strike", "image": "all_skins_in_game/AWPLightningStrike.png", "odds": 0.05, "value": 7.00},
            {"name": "Desert Eagle | Fennec Fox", "image": "all_skins_in_game/DesertEagleFennecFox.png", "odds": 0.03, "value": 14.00},
            {"name": "Talon Knife | Marble Fade", "image": "all_skins_in_game/TalonKnifeMarbleFade.png", "odds": 0.02, "value": 46.50},
        ]
    },
    {
        id: "train-treasures",
        name: "Train Treasures Case",
        price: 4.00,
        currency: "COIN",
        volatility: "High",
        image: "all_skins_in_game/KarambitLore.png", // Most valuable skin in this case
        drops: [
            {"name": "USP-S | Neo-Noir", "image": "all_skins_in_game/USP-SNeo-Noir.png", "odds": 0.20, "value": 0.33},
            {"name": "MAC-10 | Fade", "image": "all_skins_in_game/MAC-10Fade.png", "odds": 0.18, "value": 0.66},
            {"name": "MP5-SD | Acid Wash", "image": "all_skins_in_game/MP5-SDAcidWash.png", "odds": 0.15, "value": 0.99},
            {"name": "FAMAS | Styx", "image": "all_skins_in_game/FAMASStyx.png", "odds": 0.12, "value": 1.32},
            {"name": "P2000 | Fire Elemental", "image": "all_skins_in_game/P2000FireElemental.png", "odds": 0.10, "value": 1.65},
            {"name": "SSG 08 | Detour", "image": "all_skins_in_game/SSG08Detour.png", "odds": 0.08, "value": 2.27},
            {"name": "AWP | Asiimov", "image": "all_skins_in_game/AWPAsiimov.png", "odds": 0.07, "value": 4.55},
            {"name": "AK-47 | Fuel Injector", "image": "all_skins_in_game/AK-47FuelInjector.png", "odds": 0.05, "value": 9.10},
            {"name": "M4A4 | Temukau", "image": "all_skins_in_game/M4A4Temukau.png", "odds": 0.03, "value": 18.20},
            {"name": "Karambit | Lore", "image": "all_skins_in_game/KarambitLore.png", "odds": 0.02, "value": 62.00},
        ]
    }
];

function calculateRTP(caseObj) {
    let expectedValue = 0;
    caseObj.drops.forEach(drop => {
        expectedValue += drop.odds * drop.value;
    });
    return (expectedValue / caseObj.price * 100).toFixed(2);
}

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
            // Since we are using local caseData, we don't need to fetch from API
            allCases = [...caseData];
            applyFilters(); // Render cases after fetching
        } catch (error) {
            console.error("Error fetching cases:", error);
            // Fallback to local caseData if API fails (already using it)
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
