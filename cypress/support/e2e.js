import "cypress-xpath";
import { LandingPage } from "../pages/landingPage";
const landingPage = new LandingPage();

beforeEach(() => {
  landingPage.visit();
});

Cypress.Commands.add("getIframeBody", (iframeSelector) => {
  return cy
    .get(iframeSelector, { timeout: 10000 })
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
});
