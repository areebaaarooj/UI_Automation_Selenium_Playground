import { javascriptAlertLocators } from "./javascriptAlerts.locator";
import { Page, expect } from "@playwright/test";
import { homePageActions } from "../homePage/homePage.action";

export class javascriptAlertActions extends homePageActions {
  readonly locators: javascriptAlertLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new javascriptAlertLocators(page);
  }
  async javascriptAlerts() {
    await this.waitForPageToLoad();
    await expect(this.locators.alertsTitle.first()).toContainText(
      "JavaScript Alerts"
    );
    let alertText = "";

    this.page.once("dialog", async (dialog) => {
      alertText = dialog.message();
      expect(alertText).toBe("I am an alert box!");
      await dialog.accept();
    });

    await this.locators.clickMeButton.first().click();
  }
  async confirmBox(): Promise<void> {
    await this.waitForPageToLoad();
    await expect(this.locators.alertsTitle.nth(1)).toContainText(
      "Confirm box:"
    );

    this.page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("Press a button!");
      await dialog.accept();
    });
    await this.locators.clickMeButton.nth(1).click();
    await expect(this.locators.textConfirmBox).toHaveText("You pressed OK!");

    this.page.once("dialog", async (dialog) => {
      await dialog.dismiss();
    });
    await this.locators.clickMeButton.nth(1).click();
    await expect(this.locators.textConfirmBox).toHaveText(
      "You pressed Cancel!"
    );
  }

  async promptBox(inputValue: string) {
    await this.waitForPageToLoad();

    this.page.once("dialog", async (dialog) => {
      await dialog.accept(inputValue);
    });

    await this.locators.clickMeButton.nth(2).click();

    await expect(this.locators.textPromptBox).toContainText(inputValue, {
      timeout: 10000,
    });
    await this.locators.textPromptBox.textContent();
  }
}
