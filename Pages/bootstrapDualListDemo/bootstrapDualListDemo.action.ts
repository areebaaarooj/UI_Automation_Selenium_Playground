import { Page, expect } from "@playwright/test";
import { bootstrapDualListDemoLocators } from "./bootstrapDualListDemo.locator";
import { homePageActions } from "../homePage/homePage.action";

export class bootstrapDualListDemoActions extends homePageActions {
  readonly locators: bootstrapDualListDemoLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new bootstrapDualListDemoLocators(page);
  }
  async moveOneItemRight() {
    await this.waitForPageToLoad();

    const firstItem = this.locators.listItem1.first();
    await firstItem.click();
    await this.locators.moveRight.click();
  }

  async moveOneItemLeft() {
    await this.waitForPageToLoad();

    const firstItem = this.locators.listItem2.first();

    await firstItem.click();
    await this.locators.moveLeft.click();
  }

  async moveAllItemsRight() {
    await this.waitForPageToLoad();

    const items = this.locators.listItem1;
    const count = await items.count();
    console.log(count);

    for (let i = 0; i < count; i++) {
      const item = items.nth(i);
      const isSelected = (await item.getAttribute("class"))?.includes("active");

      if (!isSelected) {
        await item.click();
      }
    }

    await this.locators.moveRight.click();
  }

  async moveAllItemsLeft() {
    await this.waitForPageToLoad();

    const items = this.locators.listItem2;
    const count = await items.count();
    console.log(count);

    for (let i = 0; i < count; i++) {
      const item = items.nth(i);

      const isSelected = (await item.getAttribute("class"))?.includes("active");

      if (!isSelected) {
        await item.click();
      }
    }
    await this.locators.moveLeft.click();
  }

  async searchBoxFirst(searchText: string) {
    await this.waitForPageToLoad();
    await this.locators.searchBox1.fill(searchText);
  }

  async searchBoxSecond(searchText: string) {
    await this.waitForPageToLoad();
    await this.locators.searchBox2.fill(searchText);
  }
}
