import "cypress-xpath";
import { LandingPage } from "../pages/landingPage";
const landingPage = new LandingPage();

beforeEach(() => {
  landingPage.visit();
});
