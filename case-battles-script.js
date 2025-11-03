const cases = [
    {
        name: "Gamma Case",
        value: 10.50,
        image: "https://via.placeholder.com/80x60/2a2a2a/ffffff?text=GammaCase"
    },
    {
        name: "Chroma 2 Case",
        value: 12.75,
        image: "https://via.placeholder.com/80x60/2a2a2a/ffffff?text=Chroma2Case"
    },
    {
        name: "Operation Breakout Weapon Case",
        value: 8.20,
        image: "https://via.placeholder.com/80x60/2a2a2a/ffffff?text=BreakoutCase"
    },
    {
        name: "Huntsman Weapon Case",
        value: 15.00,
        image: "https://via.placeholder.com/80x60/2a2a2a/ffffff?text=HuntsmanCase"
    },
    {
        name: "Falchion Case",
        value: 9.99,
        image: "https://via.placeholder.com/80x60/2a2a2a/ffffff?text=FalchionCase"
    },
    {
        name: "Spectrum Case",
        value: 11.25,
        image: "https://via.placeholder.com/80x60/2a2a2a/ffffff?text=SpectrumCase"
    },
    {
        name: "Danger Zone Case",
        value: 7.80,
        image: "https://via.placeholder.com/80x60/2a2a2a/ffffff?text=DangerZoneCase"
    },
    {
        name: "Prisma Case",
        value: 13.10,
        image: "https://via.placeholder.com/80x60/2a2a2a/ffffff?text=PrismaCase"
    },
    {
        name: "Shattered Web Case",
        value: 18.50,
        image: "https://via.placeholder.com/80x60/2a2a2a/ffffff?text=ShatteredWebCase"
    },
    {
        name: "Recoil Case",
        value: 9.15,
        image: "https://via.placeholder.com/80x60/2a2a2a/ffffff?text=RecoilCase"
    }
];

const botUsernames = [
    "BotAlpha", "BotBeta", "BotGamma", "BotDelta", "BotEcho", "BotFoxtrot", "BotGolf", "BotHotel"
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCases(count) {
    const selectedCases = [];
    for (let i = 0; i < count; i++) {
        selectedCases.push(cases[getRandomInt(0, cases.length - 1)]);
    }
    return selectedCases;
}

function generateCaseBattleCard() {
    const activeCasesContainer = document.querySelector('.active-cases-container');
    if (!activeCasesContainer) return;

    const numPlayers = getRandomInt(2, 6);
    const playerAvatars = [];
    for (let i = 0; i < numPlayers; i++) {
        const botName = botUsernames[getRandomInt(0, botUsernames.length - 1)];
        const avatarColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        playerAvatars.push(`<img src="https://via.placeholder.com/30/${avatarColor.substring(4, avatarColor.indexOf(','))}/ffffff?text=${botName.substring(0,2)}" alt="${botName}" class="player-avatar">`);
    }

    const battleCases = getRandomCases(getRandomInt(3, 6));
    const totalBattleValue = battleCases.reduce((sum, c) => sum + c.value, 0).toFixed(2);
    const unboxedValue = (Math.random() * totalBattleValue * 2).toFixed(2); // Simulate some unboxed value

    const caseItemsHtml = battleCases.map(c => `<img src="${c.image}" alt="${c.name}" title="${c.name} ($${c.value})">`).join('');

    const cardHtml = `
        <div class="case-battle-card">
            <div class="card-header">
                <i class="fas fa-coins coin-icon"></i> ${getRandomInt(1, 20)} <span class="battle-value">${totalBattleValue}</span>
                <span class="unboxed-value">Unboxed: <i class="fas fa-coins coin-icon"></i> ${unboxedValue}</span>
            </div>
            <div class="case-items">
                ${caseItemsHtml}
            </div>
            <div class="card-footer">
                <div class="players-avatars">
                    ${playerAvatars.join('')}
                    <i class="fas fa-times-circle vs-icon"></i>
                </div>
                <button class="watch-battle-btn">WATCH BATTLE</button>
            </div>
        </div>
    `;
    activeCasesContainer.insertAdjacentHTML('beforeend', cardHtml);
}

document.addEventListener('DOMContentLoaded', () => {
    // Generate initial case battle cards
    for (let i = 0; i < 5; i++) {
        generateCaseBattleCard();
    }

    // Generate new case battle cards periodically
    setInterval(generateCaseBattleCard, 10000); // Add a new battle every 10 seconds
});
