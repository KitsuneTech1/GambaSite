// common.js

// Base API URL
const API_BASE = "https://api.tryharderapi.lol";

// Function to get JWT from local storage
function getAuthToken() {
    return localStorage.getItem("jwt");
}

// Generic function for making authenticated GET requests
async function authenticatedFetch(url, options = {}) {
    const token = getAuthToken();
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
        ...options,
        headers: headers,
    });

    if (!response.ok) {
        let errorDetail = `API Error: ${response.statusText}`;
        try {
            const errorData = await response.json();
            errorDetail = errorData.detail || JSON.stringify(errorData);
        } catch (parseError) {
            // If response is not JSON, use status text
            console.error("Error parsing API error response:", parseError);
        }
        console.error(`API request to ${url} failed with status ${response.status}:`, errorDetail);
        throw new Error(errorDetail);
    }

    return response.json();
}

// Helper for GET requests
async function apiGet(endpoint) {
    return authenticatedFetch(`${API_BASE}${endpoint}`);
}

// Helper for POST requests
async function apiPost(endpoint, data) {
    return authenticatedFetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

// Function to update user balance display
function updateBalanceDisplay(coinBalance, gemBalance) {
    const coinBalanceElement = document.getElementById('coin-balance');
    const gemBalanceElement = document.getElementById('gem-balance');

    if (coinBalanceElement) {
        coinBalanceElement.textContent = coinBalance !== undefined ? coinBalance.toFixed(2) : '0.00';
    }
    if (gemBalanceElement) {
        gemBalanceElement.textContent = gemBalance !== undefined ? gemBalance.toFixed(0) : '0'; // Gems usually integer
    }
}

// Function to load common HTML components (header and sidebar)
async function loadCommonComponents() {
    try {
        const headerResponse = await fetch('header.html');
        const headerHtml = await headerResponse.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;
        updateAuthContainer(); // Call after header is loaded

        const sidebarResponse = await fetch('sidebar.html');
        const sidebarHtml = await sidebarResponse.text();
        document.getElementById('sidebar-placeholder').innerHTML = sidebarHtml;
    } catch (error) {
        console.error('Error loading common components:', error);
    }
}

// Call loadCommonComponents when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    await loadCommonComponents(); // Ensure header and sidebar are loaded first
    setupCurrencySwitch();
    applySavedTheme();
    // Initial balance and user info will be fetched by updateAuthContainer if logged in
});

// Function to set up the currency switch logic
function setupCurrencySwitch() {
    const currencyToggle = document.getElementById('currencyToggle');
    const currencyLabel = document.getElementById('currency-label');

    if (currencyToggle && currencyLabel) {
        // Load saved preference
        const savedTheme = localStorage.getItem('theme') || 'coins';
        if (savedTheme === 'gems') {
            currencyToggle.checked = true;
            currencyLabel.textContent = 'GEMS';
        } else {
            currencyToggle.checked = false;
            currencyLabel.textContent = 'COINS';
        }

        currencyToggle.addEventListener('change', (event) => {
            if (event.target.checked) {
                document.body.classList.remove('theme-coins');
                document.body.classList.add('theme-gems');
                localStorage.setItem('theme', 'gems');
                currencyLabel.textContent = 'GEMS';
            } else {
                document.body.classList.remove('theme-gems');
                document.body.classList.add('theme-coins');
                localStorage.setItem('theme', 'coins');
                currencyLabel.textContent = 'COINS';
            }
        });
    }
}

// Function to apply the saved theme on page load
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'coins'; // Default to coins
    document.body.classList.add(`theme-${savedTheme}`);
}

// Function to get decoded SteamID from JWT
function getDecodedSteamID() {
    const token = localStorage.getItem("auth_token"); // Assuming auth_token is used for JWT
    if (!token) return null;
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.steamid;
    } catch (err) {
        console.error("Failed to decode JWT:", err);
        return null;
    }
}

// Function to get current currency preference
function getCurrencyPreference() {
    return localStorage.getItem('theme') || 'coins'; // 'coins' or 'gems'
}

// Function to update the authentication container in the header
async function updateAuthContainer() { // Made async to allow fetching user data
    const authContainer = document.getElementById('auth-container');
    const logoutBtn = document.getElementById('logout-btn');
    const token = localStorage.getItem('auth_token'); // Assuming 'auth_token' is used for login status

    if (authContainer) {
        if (token) {
            const steamId = getDecodedSteamID();
            if (steamId) {
                try {
                    const userData = await apiGet(`/user/profile/${steamId}`);
                    authContainer.innerHTML = `
                        <div class="user-info">
                            <img src="${userData.avatar_url || 'https://avatars.akamai.steamstatic.com/8600000000000000000000000000000000000000_full.jpg'}" alt="User Avatar" class="avatar">
                            <span class="username">${userData.username || `Steam User ${steamId.substring(0, 8)}`}</span>
                        </div>
                    `;
                    updateBalanceDisplay(userData.balance.COIN, userData.balance.GEM);
                    if (logoutBtn) logoutBtn.style.display = 'block';
                } catch (error) {
                    console.error("Error fetching user profile:", error);
                    // Fallback to generic display if API call fails
                    authContainer.innerHTML = `
                        <div class="user-info">
                            <img src="https://avatars.akamai.steamstatic.com/8600000000000000000000000000000000000000_full.jpg" alt="User Avatar" class="avatar">
                            <span class="username">Steam User ${steamId.substring(0, 8)}</span>
                        </div>
                    `;
                    updateBalanceDisplay(0, 0); // Display zero balance on error
                    if (logoutBtn) logoutBtn.style.display = 'block';
                }
            } else {
                // If steamId is not available from token, treat as logged out
                authContainer.innerHTML = `
                    <button class="login-steam-btn" onclick="loginWithSteam()">
                        <i class="fab fa-steam"></i> Login with Steam
                    </button>
                `;
                updateBalanceDisplay(0, 0);
                if (logoutBtn) logoutBtn.style.display = 'none';
            }
        } else {
            // User is logged out, display login button
            authContainer.innerHTML = `
                <button class="login-steam-btn" onclick="loginWithSteam()">
                    <i class="fab fa-steam"></i> Login with Steam
                </button>
            `;
            updateBalanceDisplay(0, 0);
            if (logoutBtn) logoutBtn.style.display = 'none';
        }
    }
}

// Placeholder for loginWithSteam function (if not defined elsewhere)
window.loginWithSteam = function() {
    alert('Login with Steam functionality not yet implemented.');
    // In a real application, this would redirect to Steam OpenID
};

// Placeholder for logout function (if not defined elsewhere)
window.logout = function() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('jwt'); // Also remove jwt if it's used
    updateAuthContainer();
    alert('Logged out successfully.');
    // Optionally redirect to home page
    window.location.href = 'index.html';
};


// Export functions for use in other scripts
export { API_BASE, apiGet, apiPost, updateBalanceDisplay, loadCommonComponents, setupCurrencySwitch, applySavedTheme, getDecodedSteamID, getCurrencyPreference, updateAuthContainer };
