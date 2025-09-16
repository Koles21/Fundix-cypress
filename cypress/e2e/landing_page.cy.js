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
});
