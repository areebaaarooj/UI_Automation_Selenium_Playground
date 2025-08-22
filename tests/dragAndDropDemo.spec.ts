import { dradAndDropActions } from "./../Pages/dragAndDropSlider/dragAndDropSlider.action";
import { test } from "@playwright/test";
import { homePageActions } from "../Pages/homePage/homePage.action";

test("Verify Drag and Drop", async ({ page }) => {
  const homePage = new homePageActions(page);
  await homePage.navigateToHomePage(
    "https://www.lambdatest.com/selenium-playground/"
  );
  await homePage.clickLinks("Drag & Drop Sliders");
  let dragAndDrop = new dradAndDropActions(page);
  await homePage.formHeadingVisible("Slider Demo");
  await dragAndDrop.dragSliderTo(15);
});
