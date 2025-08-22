import { Page, Locator } from "@playwright/test";

export class ajaxFormSubmitLocators {
  readonly nameField: Locator;
  readonly messageField: Locator;
  readonly submitButton: Locator;
  readonly processingIcon: Locator;
  readonly processingText: Locator;

  constructor(private page: Page) {
    this.nameField = page.locator("input[id='title'][name='title']");
    this.messageField = page.locator('//textarea[@name="description"]');
    this.submitButton = page.locator('//input[@type="button"]');
    this.processingIcon = page.locator('//div[@id="submit-control"]//img');
    this.processingText = page.locator("#submit-control");
  }
}
