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

// Function to update user balance display (placeholder for now)
function updateBalanceDisplay(balance) {
    const balanceElement = document.getElementById('user-balance'); // Assuming an element with this ID
    if (balanceElement) {
        balanceElement.textContent = balance.toFixed(2);
    }
}

// Function to load common HTML components (header and sidebar)
async function loadCommonComponents() {
    try {
        const headerResponse = await fetch('header.html');
        const headerHtml = await headerResponse.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;

        const sidebarResponse = await fetch('sidebar.html');
        const sidebarHtml = await sidebarResponse.text();
        document.getElementById('sidebar-placeholder').innerHTML = sidebarHtml;
    } catch (error) {
        console.error('Error loading common components:', error);
    }
}

// Call loadCommonComponents when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadCommonComponents();
    setupCurrencySwitch();
    applySavedTheme();
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

// Export functions for use in other scripts
export { API_BASE, apiGet, apiPost, updateBalanceDisplay, loadCommonComponents, setupCurrencySwitch, applySavedTheme, getDecodedSteamID, getCurrencyPreference };
