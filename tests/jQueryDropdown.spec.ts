import { jQueryActions } from "../Pages/jQueryDropdown/jQueryDropdown.action";
import { test } from "@playwright/test";
import { homePageActions } from "../Pages/homePage/homePage.action";

test("Verify Alerts", async ({ page }) => {
  const homePage = new homePageActions(page);
  await homePage.navigateToHomePage(
    "https://www.lambdatest.com/selenium-playground/"
  );

  await homePage.clickLinks("JQuery Select dropdown");
  const jQueryDD = new jQueryActions(page);
  await homePage.formHeadingVisible("Jquery Dropdown Search Demo");
  await jQueryDD.selectCountry("India");
  await jQueryDD.selectMultipleStates("California", "Florida");
  await jQueryDD.selectFileByLabel("Python");
});
