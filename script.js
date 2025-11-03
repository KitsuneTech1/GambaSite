document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');
    const onlinePlayersCount = document.getElementById('online-players-count');
    const body = document.body;

    const usernames = [
        "Coolkiller231", "ShadowStriker7", "PixelProdigy", "VortexViper", "CrimsonBlade", "CyberSamurai", "NeonNinja", "GhostGamerX", "QuantumQuake", "SolarFlare",
        "ArcticAce", "BlazeRunner", "CosmicCobra", "DarkKnight", "EchoEnigma", "FrostByte", "GravityGunner", "HydroHydra", "InfernoImpulse", "JadeJaguar",
        "KiloKrusher", "LunarLynx", "MysticMamba", "NovaNemesis", "OmegaOrion", "PhoenixPhantasm", "QuasarQuill", "RogueReaper", "StormSurge", "TerraTitan",
        "UltraUmbra", "VenomVortex", "WarpWolf", "XenoXcalibur", "YetiYonder", "ZephyrZodiac", "AlphaApex", "BetaBlade", "GammaGoliath", "DeltaDestroyer",
        "EpsilonEagle", "ZetaZealot", "EtaEclipse", "ThetaThunder", "IotaInferno", "KappaKing", "LambdaLion", "MuMarauder", "NuNebula", "XiXenon",
        "GamerGod1", "ProPlayer99", "NoobSlayer42", "EpicWinz", "FatalFury", "MajorMayhem", "GeneralGrief", "CaptainChaos", "SergeantSlaughter", "PrivatePain",
        "LethalLegend", "MythicMaster", "DivineDestroyer", "CelestialCrusher", "CosmicCataclysm", "GalacticGladiator", "StellarSlayer", "SolarStorm", "LunarLancer", "VoidVanquisher",
        "ApexPredator", "AlphaWolf", "OmegaOverlord", "SupremeSovereign", "UltimateUnderdog", "FinalBoss", "EndgameEntity", "BossSlayer", "DungeonMaster", "GameMaster",
        "TheOneAndOnly", "JustAnotherGamer", "AverageJoe", "CasualPlayer", "HardcoreHenry", "TryhardTom", "SaltySam", "ToxicTina", "FriendlyFrank", "HelpfulHannah",
        "ClutchKing", "AcePlayer", "MVP", "TopFragger", "BottomFragger", "SupportMain", "TankMain", "HealerMain", "DPSMain", "FlexPlayer"
    ];
    const messages = [
        "Just unboxed a knife! LETS GOOOO!", "Anyone wanna trade? Got a fresh FN skin.", "This case is cursed, I swear.", "OMG I'M WINNING SO MUCH!",
        "Dude, mods, ban me, I hate gambling... but one more case.", "Just lost my entire inventory. GG.", "Is this site legit?", "Just hit a 1% chance, my heart is pounding!",
        "Selling my soul for a Dragon Lore.", "This is better than opening cases in-game.", "What's the best case to open right now?", "I'm on a losing streak, send help.",
        "Just doubled my money, feeling good!", "This is so addicting.", "Can anyone spare a skin? I'm broke.", "Just got scammed, be careful everyone.",
        "The house always wins... except when I do.", "I'm never gambling again. (Probably)", "This is the best unboxing site ever!", "Just pulled a blue, as usual.",
        "My luck is insane today!", "I'm shaking right now, just unboxed a Butterfly Knife!", "This is rigged.", "I'm all in, wish me luck.",
        "Just deposited my life savings.", "I'm here for a good time, not a long time.", "This is my last case, I promise.", "I need to stop.",
        "One more win and I'm out.", "I'm on a heater!", "This is the way.", "To the moon!", "Diamond hands!", "Stonks!",
        "I'm a degen, and I'm proud.", "This is my therapy.", "I'm living on the edge.", "High risk, high reward.", "Go big or go home.",
        "Fortune favors the bold.", "You miss 100% of the shots you don't take.", "Just do it.", "I'm feeling lucky.", "Lady Luck is on my side tonight.",
        "The gambling gods have blessed me.", "I'm on a pilgrimage to the land of skins.", "This is my quest for the holy grail of skins.", "I'm on a mission from God.", "I'm on a mission to get rich or die tryin'.",
        "I'm a high roller.", "I'm a whale.", "I'm a shark.", "I'm a predator.", "I'm a beast.", "I'm a monster.", "I'm a god.",
        "I'm the king of the world!", "I'm on top of the world!", "I'm flying high!", "I'm walking on sunshine!", "I'm feeling good!", "I'm unstoppable!",
        "I'm invincible!", "I'm immortal!", "I'm a legend!", "I'm a myth!", "I'm a god among men!", "I'm the chosen one!", "I'm the one!",
        "Just got a stattrak knife, I can die happy now.", "This site has the best odds, for real.", "Another gray, my life is pain.", "Can I get a loan of 1 coin?",
        "Who is the site owner? I need to have a word.", "Just saw someone win a huge pot, so jealous.", "Is the site down for anyone else?", "My deposit is not showing up, help!",
        "Just withdrew my winnings, so easy!", "This chat is moving so fast.", "Anyone from Brazil here?", "Let's gooo, another win!",
        "I should be studying right now.", "Don't tell my wife about this.", "This is my secret addiction.", "I love the smell of virtual items in the morning.",
        "Just got my daily bonus, time to lose it all.", "I'm a professional gambler, trust me.", "I have a system, it's foolproof.", "I'm due for a big win, I can feel it.",
        "This is my last dollar, please be a knife.", "I'm praying to the RNG gods.", "Gaben, please bless me.", "I'm on a first-name basis with the support team.",
        "I'm the reason this site is profitable.", "I'm a VIP, get on my level.", "I'm a whale, hear me roar.", "I'm a shark, and I smell blood in the water."
    ];

    function addChatMessage(username, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `<span class="username">${username}:</span> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
    }

    function generateRandomMessage() {
        const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        addChatMessage(randomUsername, randomMessage);
    }

    // Generate a random message every 5-10 seconds
    setInterval(generateRandomMessage, Math.random() * (10000 - 5000) + 5000);

    // Send message functionality (for user input, though not required to be functional)
    sendChatBtn.addEventListener('click', () => {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addChatMessage("You", userMessage); // Display user's message
            chatInput.value = '';
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatBtn.click();
        }
    });

    // Initial messages to populate the chat
    for (let i = 0; i < 5; i++) {
        generateRandomMessage();
    }

    // Generate random online player count
    function updateOnlinePlayers() {
        const randomCount = Math.floor(Math.random() * (241 - 53 + 1)) + 53;
        onlinePlayersCount.textContent = randomCount.toLocaleString();
    }

    updateOnlinePlayers(); // Set initial count
    setInterval(updateOnlinePlayers, 10000); // Update every 10 seconds

    // Dynamic Background Functionality
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('background-particle');
        body.appendChild(particle);

        const size = Math.random() * 5 + 2; // 2-7px (reverting to original size)
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`; // Random color
        particle.style.opacity = Math.random() * 0.5 + 0.2; // 0.2-0.7 opacity
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`; // 5-15s duration
        particle.style.animationDelay = `${Math.random() * 5}s`; // 0-5s delay

        // Remove particle after animation to prevent DOM bloat
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    // Generate particles periodically
    setInterval(createParticle, 500); // Reverting to original particle creation frequency and single particle
    
    // Modal functionality
    const addFundsBtn = document.querySelector('.add-funds-btn');
    const purchaseModal = document.getElementById('purchaseModal');
    const closeButton = document.querySelector('.close-button');

    purchaseModal.style.display = 'none'; // Ensure modal is hidden on load

    addFundsBtn.addEventListener('click', () => {
        purchaseModal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        purchaseModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == purchaseModal) {
            purchaseModal.style.display = 'none';
        }
    });
});
