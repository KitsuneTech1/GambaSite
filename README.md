# Kitsune Unboxing Site

This repository contains the frontend code for the Kitsune Unboxing website, a platform offering case unboxing experiences and case battles.

## Project Overview

The Kitsune Unboxing site is a social casino web application designed to simulate case openings and provide an engaging user experience, operating legally within the State of Missouri. It features a dark theme with a distinctive purple-pink gradient (primary pink: `#ff00ff`), interactive elements, and a responsive design.

## Current State of the Project

The project currently includes the following pages and functionalities:

### Pages:
- `index.html`: The main landing page.
- `cases.html`: Displays various cases available for unboxing.
- `case-battles.html`: Features a case battle simulator.
- `unboxing.html`: The interactive case unboxing simulator.
- `terms-of-service.html`: Legal page detailing the terms of service.
- `privacy-policy.html`: Legal page outlining the privacy policy.
- `sweepstakes-rules.html`: Legal page for official sweepstakes rules.
- `refund-policy.html`: Legal page explaining the refund policy.
- `kyc-aml-policy.html`: Legal page for Know Your Customer and Anti-Money Laundering policies.

### Core Functionalities:
- **Dynamic Content Generation:** JavaScript is used to dynamically load and display cases and unboxing items.
- **Interactive Unboxing Simulator:** A visual unboxing reel with spinning animation, rarity color highlights, and a winning line.
- **Currency Toggle:** Functionality to switch between different currency displays (though not fully implemented for real transactions yet).
- **Chat System:** A basic chat interface for online players.
- **Purchase Modal:** A modal window for purchasing in-game packages.
- **Responsive Design:** The site is designed to be accessible and visually appealing across various devices.
- **Legal Section:** Comprehensive legal pages (Terms of Service, Privacy Policy, Sweepstakes Rules, Refund Policy, KYC/AML Policy) with placeholder content, consistent styling, and a dedicated footer.
- **Missouri Law Compliance:** All legal documents have been updated to specify Missouri as the governing law.
- **Consistent Header and Sidebar:** All legal pages now include the main site header and the left chat sidebar for a unified user experience.

## Key Technical Concepts

- **HTML5:** Structure for all web pages.
- **CSS3:** Extensive styling for layout, typography, animations, and color schemes (purple-pink gradient, dark theme).
- **JavaScript (ES6+):** Powers dynamic content, interactive elements (modal, unboxing reel, chat, currency toggle), and page-specific logic.
- **Font Awesome:** Used for various icons across the site.
- **Responsive Web Design:** Media queries and flexible layouts ensure adaptability to different screen sizes.

## Problem Solving & Improvements Implemented

- **Dynamic Unboxing Simulator:** Successfully implemented a dynamic case unboxing simulator with visual feedback (rarity colors, spinning animation, winning line).
- **Layout and Responsiveness:** Addressed and fixed horizontal scrolling issues on various pages.
- **Modal Behavior:** Corrected issues with modal auto-display and ensured proper functionality.
- **Styling Consistency:** Maintained a consistent dark theme and purple-pink color palette across all new and existing pages.
- **Legal Content Integration:** Seamlessly integrated new legal pages with the existing site structure and updated them to reflect specific legal requirements (Missouri law).
- **Header and Sidebar Integration:** Ensured the main header and left chat sidebar are present and functional on all legal pages for a consistent user experience.

## Future Plans (User Requested)

The following features are planned for future development:

- **Steam Login Integration:** Implement full authentication via Steam for user login.
- **Payment Methods:** Integrate various payment gateways for real-money transactions.
- **Weapon Icons:** Replace placeholder images with actual weapon icons for cases and unboxing items.

## Additional Website Needs / Suggested Improvements

Based on the current state and future plans, here are a few additional areas for improvement:

1.  **Backend Integration:** The current site is largely frontend-focused. A robust backend is needed to handle:
    -   User authentication and profiles (beyond Steam login).
    -   Secure storage and management of user balances (coins, gems).
    -   Case data management (defining cases, drops, probabilities).
    -   Transaction processing and logging.
    -   Chat message persistence and moderation.
    -   Leaderboard data and affiliate tracking.
    -   API endpoints for all dynamic content.

2.  **Real-time Updates:** Enhance the chat and online players count with real-time updates using WebSockets (e.g., Socket.IO) for a more engaging experience.

3.  **User Account Management:**
    -   Profile pages for users to view their inventory, transaction history, and statistics.
    -   Settings for account preferences, privacy, and notifications.

4.  **Error Handling and User Feedback:**
    -   Implement more comprehensive error handling for user actions (e.g., failed purchases, network issues).
    -   Provide clear and informative feedback messages to users.

5.  **Accessibility Enhancements:**
    -   Improve keyboard navigation.
    -   Ensure proper ARIA attributes for screen readers.
    -   Check color contrast ratios for better readability.

6.  **Performance Optimization:**
    -   Optimize image loading (lazy loading, appropriate formats).
    -   Minify CSS and JavaScript files.
    -   Implement caching strategies.

7.  **Testing:**
    -   Add unit and integration tests for JavaScript functionalities.
    -   Implement end-to-end tests for critical user flows (e.g., unboxing, case battles, purchases).

8.  **Security Audit:** Conduct a thorough security audit, especially before integrating real payment methods and user data. This includes protecting against XSS, CSRF, SQL injection (if a database is used), and other common web vulnerabilities.

9.  **Admin Panel:** A backend administration interface for managing users, cases, battles, promotions, and reviewing logs.

10. **Localization/Internationalization:** If targeting a global audience, implement support for multiple languages and currencies.
