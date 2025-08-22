import { checkBoxDemoActions } from "./../Pages/checkBoxDemo/checkboxDemo.action";
import { test } from "@playwright/test";
import { homePageActions } from "../Pages/homePage/homePage.action";

test("Verify Multiple CheckBoxes", async ({ page }) => {
  const homePage = new homePageActions(page);
  await homePage.navigateToHomePage(
    "https://www.lambdatest.com/selenium-playground/"
  );
  await homePage.clickLinks("Checkbox Demo");
  let checkBoxDemo = new checkBoxDemoActions(page);
  await homePage.formHeadingVisible("Checkbox Demo");
  await checkBoxDemo.checkBoxSingle();
  await checkBoxDemo.checkBoxDisable();
  await checkBoxDemo.checkboxMultiple();
  await checkBoxDemo.uncheckboxMultiple();
  await checkBoxDemo.handleCheckButton();
});
