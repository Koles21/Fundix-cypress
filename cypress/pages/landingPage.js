export class LandingPage {
  getFundedButton =
    "//div[@class='sc-e6946a11-3 iywRcs']//span[text()='Get funded']";
  allLinks = "a[href]";
  bodySelector = "body";
  homeNav = "//span[text()='Home']";
  howItWorksNav = "//a[@href='/#works']";
  whyUsNav = "//a[@href='/#why']";
  faqNav = "//a[@href='/#faq']";

  visit() {
    cy.visit("/");
  }

  getNavbarItem(navItemLocator) {
    return cy.xpath(navItemLocator).first();
  }

  getAllNavbarItems() {
    return [this.homeNav, this.howItWorksNav, this.whyUsNav, this.faqNav];
  }

  getFundedButtons() {
    return cy.xpath(this.getFundedButton);
  }

  getAllLinks() {
    return cy.get(this.allLinks);
  }

  checkResponsive(viewport) {
    cy.viewport(viewport);
    cy.get(this.bodySelector).should("be.visible");
  }
}
