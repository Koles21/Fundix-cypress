import { LandingPage } from "../pages/landingPage";
import { LandingAssertions } from "../assertions/landingAssertions";

describe("Fundix Landing Page", () => {
  const landingPage = new LandingPage();

  it("loads successfully", () => {
    LandingAssertions.expectPageLoaded();
  });

  it("shows navigation menu items", () => {
    LandingAssertions.expectNavbarToBeVisible(landingPage);
  });

  it("Get funded button is clickable", () => {
    LandingAssertions.expectGetFundedButtonValid(
      landingPage.getFundedButtons()
    );
  });

  it("has no broken links", () => {
    LandingAssertions.expectNoBrokenLinks(landingPage.getAllLinks());
  });

  it("is responsive", () => {
    landingPage.checkResponsive("iphone-x");
    landingPage.checkResponsive("macbook-15");
  });

  it("can open help dialog", () => {
    landingPage.openDialog();
    LandingAssertions.expectHelpDialogOpened();
  });

  it("can navigate to navbar sections", () => {
    landingPage.openHowItWorks();
    LandingAssertions.assertSectionsToBeVisible("Prove. Trade. Earn.");
    landingPage.openWhyUs();
    LandingAssertions.assertSectionsToBeVisible("Why choose Fundix");
    landingPage.openFAQ();
    LandingAssertions.assertSectionsToBeVisible("Frequently asked questions");
  });
});
