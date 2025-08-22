import { jQueryDropdownLocators } from "./jQueryDropdown.locator";
import { Page, expect } from "@playwright/test";
import { homePageActions } from "../homePage/homePage.action";

export class jQueryActions extends homePageActions {
  readonly locators: jQueryDropdownLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new jQueryDropdownLocators(page);
  }

  async selectCountry(name: string) {
    await this.waitForPageToLoad();
    await this.locators.searchBox1.first().click();
    await this.locators.searchDropDown.locator(`text=${name}`).click();
  }

  async selectMultipleStates(...states: string[]) {
  await this.waitForPageToLoad();

  for (const state of states) {
    await this.locators.searchBox2.first().fill(state);
    await this.locators.multipleDropDown.locator(`text=${state}`).click();
  }
}

async selectFileByLabel(optionLabel: string) {
  await this.waitForPageToLoad();
  await this.locators.categoryDropDown.selectOption({ label: optionLabel });
  await expect(this.locators.categoryDropDown).toHaveValue(
    await this.locators.categoryDropDown.inputValue()
  );
}
}
  
