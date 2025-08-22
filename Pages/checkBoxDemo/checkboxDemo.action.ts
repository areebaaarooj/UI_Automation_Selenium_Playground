import { checkBoxDemoLocators } from "./checkBoxDemo.locator";
import { Page, expect } from "@playwright/test";
import { homePageActions } from "../homePage/homePage.action";

export class checkBoxDemoActions extends homePageActions {
  readonly locators: checkBoxDemoLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new checkBoxDemoLocators(page);
  }
  async checkBoxSingle() {
    await this.waitForPageToLoad();
    await this.locators.singleCheckbox.check();
    await expect(this.locators.haveText).toHaveText("Checked!");
  }
  async checkBoxDisable() {
    await this.waitForPageToLoad();
    const count = await this.locators.disableCheckbox.count();
    for (let i = 0; i < count; i++) {
      const item = this.locators.disableCheckbox.nth(i);
      const isDisabled = await item.isDisabled();

      if (!isDisabled) {
        await item.click();
      }
    }
  }
  async checkboxMultiple() {
    await this.waitForPageToLoad();
    const count = await this.locators.multipleCheckbox.count();
    for (let i = 0; i < count; i++) {
      const item = this.locators.multipleCheckbox.nth(i);
      await item.check();
    }
  }
  async uncheckboxMultiple() {
    await this.waitForPageToLoad();
    const count = await this.locators.multipleCheckbox.count();
    for (let i = 0; i < count; i++) {
      const item = this.locators.multipleCheckbox.nth(i);
      await item.uncheck();
    }
  }
  async handleCheckButton() {
    await this.waitForPageToLoad();
    for (let i = 0; i < 2; i++) {
      const buttonText = await this.locators.checkAllButton.textContent();
      if (buttonText === "Check All") {
        await this.locators.checkAllButton.click();
        await this.checkboxMultiple();
      } else if (buttonText === "Uncheck All") {
        await this.locators.checkAllButton.click();
        await this.uncheckboxMultiple();
      }
    }
  }

  async formSubHeadingVisible(subHeading: string) {
    await this.waitForPageToLoad();
    const pageTitle = this.page.locator(`//h2[text()='${subHeading}']`);
    await expect(pageTitle).toBeVisible();
  }
}
