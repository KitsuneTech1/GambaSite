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

// Export functions for use in other scripts
export { API_BASE, apiGet, apiPost, updateBalanceDisplay };
