export class LandingAssertions {
  static navbarItems = ["Home", "How it works", "Why us", "FAQ"];

  static expectPageLoaded() {
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  }

  static expectNavbarToBeVisible(landingPage) {
    const locators = landingPage.getAllNavbarItems();

    locators.forEach((locator, index) => {
      landingPage
        .getNavbarItem(locator)
        .invoke("text")
        .should("eq", this.navbarItems[index]);
    });
  }

  static expectGetFundedButtonValid(getFundedButton) {
    getFundedButton
      .should("have.length", 1)
      .first()
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  }

  static expectNoBrokenLinks(links) {
    links.each(($a) => {
      const href = $a.prop("href");
      cy.request(href).its("status").should("eq", 200);
    });
  }
}
