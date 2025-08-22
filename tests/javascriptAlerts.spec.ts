import { javascriptAlertActions } from "../Pages/javascriptAlerts/javascriptAlerts.action";
import { test } from "@playwright/test";
import { homePageActions } from "../Pages/homePage/homePage.action";

test("Verify Alerts", async ({ page }) => {
  const homePage = new homePageActions(page);
  await homePage.navigateToHomePage(
    "https://www.lambdatest.com/selenium-playground/"
  );
  await homePage.clickLinks("Javascript Alerts");
  let javscriptAlerts = new javascriptAlertActions(page);
  await homePage.formHeadingVisible("Javascript Alert Box Demo");
  await javscriptAlerts.javascriptAlerts();
  await javscriptAlerts.confirmBox();
  await javscriptAlerts.promptBox("Areeba");
});
