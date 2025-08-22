import { Page, expect } from "playwright/test";
import { ajaxFormSubmitLocators } from "./ajaxFormSubmit.locators";
import { homePageActions } from "../homePage/homePage.action";
export class ajaxFormSubmitActions extends homePageActions {
  readonly locators: ajaxFormSubmitLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ajaxFormSubmitLocators(page);
  }
  async enterName(name: string) {
    await this.waitForPageToLoad();
    await this.locators.nameField.fill(name);
  }
  async enterMessage(message: string) {
    await this.waitForPageToLoad();
    await this.locators.messageField.type(message);
  }
  async clickSubmitButton() {
    await this.waitForPageToLoad();
    await this.locators.submitButton.click();
  }
  async processingIcon(): Promise<boolean> {
    await this.waitForPageToLoad();
    return await this.locators.processingIcon.isVisible();
  }
  async processingText(): Promise<void> {
    await this.waitForPageToLoad();
    await expect(this.locators.processingText).toHaveText(
      /Ajax Request is Processing!/i
    );
  }
}
