import { Page, Locator } from "@playwright/test";

export class javascriptAlertLocators {
readonly alertsTitle: Locator;
  readonly clickMeButton: Locator;
  readonly textConfirmBox: Locator;
   readonly textPromptBox: Locator;

  constructor(private page: Page) {

    this.alertsTitle = page.locator('//p[contains(@class,"font-bold") and contains(@class,"text-gray-900")]');
    this.clickMeButton = page.locator('//button[contains(@class,"btn-dark")]');
    this.textConfirmBox = page.locator('//p[@id="confirm-demo"]');
    this.textPromptBox = page.locator('//p[@id="prompt-demo"]');

}
}
