import { test } from "@playwright/test";
import { bootstrapDualListDemoActions } from "../Pages/bootstrapDualListDemo/bootstrapDualListDemo.action";
import { homePageActions } from "../Pages/homePage/homePage.action";

test("Verify Bootstrap Dual Lists Items", async ({ page }) => {
  const homePage = new homePageActions(page);
  await homePage.navigateToHomePage(
    "https://www.lambdatest.com/selenium-playground/"
  );
  await homePage.clickLinks("Bootstrap List Box");

  const bootstrapDualList = new bootstrapDualListDemoActions(page);
  await homePage.formHeadingVisible("Bootstrap Dual List Demo");

  await page.pause();
  const leftToRight = await bootstrapDualList.moveOneItemRight();
  console.log("Moved One Item Right:", leftToRight);

  const rightToLeft = await bootstrapDualList.moveOneItemLeft();
  console.log("Moved One Item Left:", rightToLeft);
  await page.pause();
  const allLeft = await bootstrapDualList.moveAllItemsLeft();
  console.log("Moved All Items Left:", allLeft);

  const allRight = await bootstrapDualList.moveAllItemsRight();
   console.log("Moved All Items Right:", allRight);

  await bootstrapDualList.searchBoxFirst("A");

  await bootstrapDualList.searchBoxSecond("D");
});
