// script.js

import { getDecodedSteamID } from './common.js';

document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');
    const chatMessages = document.getElementById('chat-messages');
    const onlinePlayersCount = document.getElementById('online-players-count');

    // Placeholder for online players count
    if (onlinePlayersCount) {
        onlinePlayersCount.textContent = Math.floor(Math.random() * 1000) + 100; // Random number between 100 and 1099
    }

    // Function to display a chat message
    function displayMessage(username, message, isSelf = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        if (isSelf) {
            messageElement.classList.add('self-message'); // Optional: for styling user's own messages
        }
        messageElement.innerHTML = `<span class="username">${username}:</span> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    }

    // Function to send a chat message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            const steamId = getDecodedSteamID();
            const username = steamId ? `Steam User ${steamId.substring(0, 8)}` : 'Guest'; // Use generic name for now
            displayMessage(username, message, true); // Display own message
            chatInput.value = ''; // Clear input

            // In a real application, this would send the message to a backend
            console.log(`Message sent: ${message}`);
        }
    }

    // Event listeners for chat input and send button
    if (sendChatBtn) {
        sendChatBtn.addEventListener('click', sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Example initial messages (for demonstration)
    displayMessage('Admin', 'Welcome to Kitsune Unboxing! Feel free to chat.');
    displayMessage('Bot', 'Good luck with your unboxings!');
});
