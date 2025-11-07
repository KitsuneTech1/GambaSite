document.addEventListener("DOMContentLoaded", () => {
    // Function to load header.html
    async function loadHeader() {
        try {
            const response = await fetch("header.html");
            const headerHtml = await response.text();
            const headerPlaceholder = document.getElementById("header-placeholder");
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = headerHtml;
            }
        } catch (error) {
            console.error("Error loading header:", error);
        }
    }

    // Function to load sidebar.html
    async function loadSidebar() {
        try {
            const response = await fetch("sidebar.html");
            const sidebarHtml = await response.text();
            const sidebarPlaceholder = document.getElementById("sidebar-placeholder");
            if (sidebarPlaceholder) {
                sidebarPlaceholder.innerHTML = sidebarHtml;
            }
        } catch (error) {
            console.error("Error loading sidebar:", error);
        }
    }

    // Chat and Online Players functionality (moved from script.js)
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
        "Just unboxed a knife! LETS GOOOO!", "Anyone wanna trade? Got a fresh FN skin.", "This case is cursed, I swear.", "OMG I\"M WINNING SO MUCH!",
        "Dude, mods, ban me, I hate gambling... but one more case.", "Just lost my entire inventory. GG.", "Is this site legit?", "Just hit a 1% chance, my heart is pounding!",
        "Selling my soul for a Dragon Lore.", "This is better than opening cases in-game.", "What\"s the best case to open right now?", "I\"m on a losing streak, send help.",
        "Just doubled my money, feeling good!", "This is so addicting.", "Can anyone spare a skin? I\"m broke.", "Just got scammed, be careful everyone.",
        "The house always wins... except when I do.", "I\"m never gambling again. (Probably)", "This is the best unboxing site ever!", "Just pulled a blue, as usual.",
        "My luck is insane today!", "I\"m shaking right now, just unboxed a Butterfly Knife!", "This is rigged.", "I\"m all in, wish me luck.",
        "Just deposited my life savings.", "I\"m here for a good time, not a long time.", "This is my last case, I promise.", "I need to stop.",
        "One more win and I\"m out.", "I\"m on a heater!", "This is the way.", "To the moon!", "Diamond hands!", "Stonks!",
        "I\"m a degen, and I\"m proud.", "This is my therapy.", "I\"m living on the edge.", "High risk, high reward.", "Go big or go home.",
        "Fortune favors the bold.", "You miss 100% of the shots you don\"t take.", "Just do it.", "I\"m feeling lucky.", "Lady Luck is on my side tonight.",
        "The gambling gods have blessed me.", "I\"m on a pilgrimage to the land of skins.", "This is my quest for the holy grail of skins.", "I\"m on a mission from God.", "I\"m on a mission to get rich or die tryin\".",
        "I\"m a high roller.", "I\"m a whale.", "I\"m a shark.", "I\"m a predator.", "I\"m a beast.", "I\"m a monster.", "I\"m a god.",
        "I\"m the king of the world!", "I\"m on top of the world!", "I\"m flying high!", "I\"m walking on sunshine!", "I\"m feeling good!", "I\"m unstoppable!",
        "I\"m invincible!", "I\"m immortal!", "I\"m a legend!", "I\"m a myth!", "I\"m a god among men!", "I\"m the chosen one!", "I\"m the one!",
        "Just got a stattrak knife, I can die happy now.", "This site has the best odds, for real.", "Another gray, my life is pain.", "Can I get a loan of 1 coin?",
        "Who is the site owner? I need to have a word.", "Just saw someone win a huge pot, so jealous.", "Is the site down for anyone else?", "My deposit is not showing up, help!",
        "Just withdrew my winnings, so easy!", "This chat is moving so fast.", "Anyone from Brazil here?", "Let\"s gooo, another win!",
        "I should be studying right now.", "Don\"t tell my wife about this.", "This is my secret addiction.", "I love the smell of virtual items in the morning.",
        "Just got my daily bonus, time to lose it all.", "I\"m a professional gambler, trust me.", "I have a system, it\"s foolproof.", "I\"m due for a big win, I can feel it.",
        "This is my last dollar, please be a knife.", "I\"m praying to the RNG gods.", "Gaben, please bless me.", "I\"m on a first-name basis with the support team.",
        "I\"m the reason this site is profitable.", "I\"m a VIP, get on my level.", "I\"m a whale, hear me roar.", "I\"m a shark, and I smell blood in the water."
    ];

    function initializeChatAndOnlinePlayers() {
        console.log("Initializing chat and online players...");
        const chatMessages = document.getElementById("chat-messages");
        const chatInput = document.getElementById("chat-input");
        const sendChatBtn = document.getElementById("send-chat-btn");
        const onlinePlayersCount = document.getElementById("online-players-count");

        if (!chatMessages) { console.warn("Chat messages element not found."); return; }
        if (!chatInput) { console.warn("Chat input element not found."); return; }
        if (!sendChatBtn) { console.warn("Send chat button element not found."); return; }
        if (!onlinePlayersCount) { console.warn("Online players count element not found."); return; }

        console.log("All chat and online player elements found.");

        function addChatMessage(username, message) {
            const messageElement = document.createElement("div");
            messageElement.classList.add("chat-message");
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
        sendChatBtn.addEventListener("click", () => {
            const userMessage = chatInput.value.trim();
            if (userMessage) {
                addChatMessage("You", userMessage); // Display user\"s message
                chatInput.value = "";
            }
        });

        chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
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
    }


    // Function to parse JWT token
    function parseJwt(token) {
        try {
            return JSON.parse(atob(token.split(".")[1]));
        } catch (e) {
            return null;
        }
    }

    // Function to clear authentication data
    function clearAuthData() {
        console.log("Clearing authentication data.");
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("userDisplayName");
        localStorage.removeItem("userAvatar");
        localStorage.removeItem("steamid");
    }

    // Function to show the login button and hide user info
    function showLoginButton() {
        console.log("Showing login button.");
        const authContainer = document.getElementById("auth-container");
        if (!authContainer) return;

        const STEAM_AUTH_API_BASE = "https://api.playkitsune.lol";
        let steamLoginButton = authContainer.querySelector(`a[href="${STEAM_AUTH_API_BASE}/auth/steam"]`);
        if (!steamLoginButton) {
            steamLoginButton = document.createElement("a");
            steamLoginButton.href = `${STEAM_AUTH_API_BASE}/auth/steam`;
            steamLoginButton.id = "login-btn";
            const img = document.createElement("img");
            img.src = "https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_large_noborder.png";
            img.alt = "Login with Steam";
            steamLoginButton.appendChild(img);
            authContainer.appendChild(steamLoginButton);
        }
        const userInfoDiv = authContainer.querySelector(".user-info");
        if (userInfoDiv) {
            userInfoDiv.remove();
        }
        const logoutBtn = document.getElementById("logout-btn");
        if (logoutBtn) {
            logoutBtn.style.display = "none";
        }

        const adminPanelLink = document.getElementById("admin-panel-link");
        if (adminPanelLink) {
            adminPanelLink.style.display = "none";
        }
    }

    // Function to update UI with user details
    async function updateUI(displayName, avatarUrl, steamid) {
        console.log("Updating UI with user info:", displayName, avatarUrl, steamid);
        const authContainer = document.getElementById("auth-container");
        if (!authContainer) return;

        const GENERAL_API_BASE = "https://api.tryharderapi.lol"; // Define GENERAL_API_BASE here
        const steamLoginButton = authContainer.querySelector(`a[href="${STEAM_AUTH_API_BASE}/auth/steam"]`);

        if (steamLoginButton) {
            steamLoginButton.remove();
        }

        let userInfoDiv = authContainer.querySelector(".user-info");
        if (!userInfoDiv) {
            userInfoDiv = document.createElement("div");
            userInfoDiv.classList.add("user-info");
            authContainer.appendChild(userInfoDiv);
        }
        userInfoDiv.innerHTML = `
            <img src="${avatarUrl}" class="avatar" />
            <span class="username">${displayName}</span>
        `;

        const logoutBtn = document.getElementById("logout-btn");
        if (logoutBtn) {
            logoutBtn.style.display = "block";
        }

        const adminPanelLink = document.getElementById("admin-panel-link");
        if (adminPanelLink && steamid === authorizedSteamID) {
            adminPanelLink.style.display = "block";
        }
    }

    // Function to handle authentication flow
    async function handleAuth() {
        console.log("Handling authentication...");
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
        const STEAM_AUTH_API_BASE = "https://api.playkitsune.lol";
        const GENERAL_API_BASE = "https://api.tryharderapi.lol";

        console.log("Token from URL:", token);

        if (token) {
            const decodedToken = parseJwt(token);
            console.log("Decoded Token:", decodedToken);

            if (decodedToken && decodedToken.personaName && decodedToken.avatar && decodedToken.steamid) { // Changed displayName to personaName
                console.log("Saving token and user data to localStorage...");
                localStorage.setItem("jwtToken", token);
                localStorage.setItem("userDisplayName", decodedToken.personaName); // Changed displayName to personaName
                localStorage.setItem("userAvatar", decodedToken.avatar);
                localStorage.setItem("steamid", decodedToken.steamid);
                console.log("localStorage updated.");

                await fetchAndDisplayUserDetails(decodedToken.steamid);
                initializeWebSocket(decodedToken.steamid); // Initialize WebSocket
                
                console.log("Cleaning URL...");
                window.history.replaceState({}, document.title, window.location.pathname); // Clean the URL
                console.log("URL cleaned.");
            } else {
                console.error("Invalid or incomplete JWT payload.");
                clearAuthData(); // Clear invalid data
                showLoginButton();
            }
        } else {
            console.log("No token in URL. Checking localStorage...");
            const storedToken = localStorage.getItem("jwtToken");
            const storedSteamID = localStorage.getItem("steamid");
            
            if (storedToken && storedSteamID) {
                console.log("Stored token found. Attempting to use it.");
                const decodedToken = parseJwt(storedToken);
                if (decodedToken && decodedToken.personaName && decodedToken.avatar && decodedToken.steamid) { // Changed displayName to personaName
                    await fetchAndDisplayUserDetails(decodedToken.steamid);
                    initializeWebSocket(decodedToken.steamid); // Initialize WebSocket
                } else {
                    console.error("Stored token is invalid or incomplete.");
                    clearAuthData();
                    showLoginButton();
                }
            } else {
                console.log("No stored token found. Showing login button.");
                showLoginButton();
            }
        }
    }

    // Function to fetch and display user details from API
    async function fetchAndDisplayUserDetails(steamid) {
        try {
            const response = await fetch(`${GENERAL_API_BASE}/user/by_steam?steam_id=${steamid}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const userData = await response.json();
            updateUI(userData.username, localStorage.getItem("userAvatar"), userData.steam_id);
        } catch (error) {
            console.error("Error fetching user details:", error);
            updateUI(localStorage.getItem("userDisplayName"), localStorage.getItem("userAvatar"), steamid); // Fallback to stored data
        }
    }

    // Function to initialize WebSocket for balance updates
    function initializeWebSocket(steam_id) {
        const socket = new WebSocket(`wss://api.tryharderapi.lol/ws/balance/${steam_id}`);

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.COIN !== undefined) {
                document.getElementById("coin-balance").textContent = data.COIN.toFixed(2);
            }
            if (data.GEM !== undefined) {
                document.getElementById("gem-balance").textContent = data.GEM.toFixed(2);
            }
        };

        socket.onclose = () => console.log("Disconnected from balance updates");
        socket.onerror = (err) => console.error("WebSocket error", err);
    }

    // Logout function (made global for onclick in header.html)
    window.logout = () => {
        clearAuthData();
        showLoginButton();
        window.location.reload();
    };

    // Dynamic Background Functionality (kept here as it\"s body-wide)
    const body = document.body;
    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("background-particle");
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
        particle.addEventListener("animationend", () => {
            particle.remove();
        });
    }

    // Generate particles periodically
    setInterval(createParticle, 500);

    // Modal functionality (kept here as it\"s body-wide)
    // Query modal elements at the top level, as they are in the main HTML, not dynamic.
    const purchaseModal = document.getElementById("purchaseModal");
    const closeButton = document.querySelector(".close-button");

    // Check if elements exist before adding event listeners
    if (purchaseModal) {
        purchaseModal.style.display = "none"; // Ensure modal is hidden on load
    }

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            if (purchaseModal) {
                purchaseModal.style.display = "none";
            }
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target == purchaseModal) {
            if (purchaseModal) {
                purchaseModal.style.display = "none";
            }
        }
    });

    // Load the header and sidebar first, then initialize chat and auth
    Promise.all([loadHeader(), loadSidebar()]).then(() => {
        // Now that header is loaded, query addFundsBtn
        const addFundsBtn = document.querySelector(".add-funds-btn");
        if (addFundsBtn) {
            addFundsBtn.addEventListener("click", () => {
                if (purchaseModal) {
                    purchaseModal.style.display = "flex";
                }
            });
        } else {
            console.warn("Add funds button not found after header load.");
        }

        initializeChatAndOnlinePlayers(); // This is where chat is initialized
        handleAuth(); // Call handleAuth after header and sidebar are loaded
    });
});
