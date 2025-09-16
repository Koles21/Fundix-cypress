Fundix Web Frontend – Cypress E2E Test Suite

This project contains end-to-end tests for the Fundix web frontend using Cypress and the Page Object Model (POM) pattern.
Tests verify core UI functionality, navigation, responsiveness, and link validity on Landing Page.

Installation

Clone the repository:

git clone <repo-url>
cd <repo-folder>

Install dependencies:

npm install

Open Cypress Test Runner:

npx cypress open

or run tests in headless mode:

npx cypress run

⚙️ Project Structure
cypress/
├── assertions/
│   └── landingAssertions.js      # Assertion helper class
├── pages/
│   └── landingPage.js            # Page Object for Landing Page
├── e2e/
│   └── landing_page.cy.js        # Test suite
├── support/
│   └── e2e.js                    # Global Cypress configuration
