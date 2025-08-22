import { test,expect } from "@playwright/test";
import { ajaxFormSubmitActions } from "../Pages/ajaxFormSubmit/ajaxFormSubmit.action";
import { homePageActions } from "../Pages/homePage/homePage.action";

test("Verify Ajax Form Fields", async ({ page }) => {
  const homePage = new homePageActions(page);
  await homePage.navigateToHomePage(
    "https://www.lambdatest.com/selenium-playground/"
  );
  await homePage.clickLinks("Ajax Form Submit");
  let ajaxFormSubmit = new ajaxFormSubmitActions(page);
  await homePage.formHeadingVisible("Form Submit Demo");
  await ajaxFormSubmit.enterName("Areeba");

  await ajaxFormSubmit.enterMessage("My Message");

  await ajaxFormSubmit.clickSubmitButton();

  await expect
    .poll(async () => await ajaxFormSubmit.processingIcon(), {
      timeout: 5000,
      message: "image is not visible after ajax form submission",
    })
    .toBe(true);
  await ajaxFormSubmit.processingText();
});
