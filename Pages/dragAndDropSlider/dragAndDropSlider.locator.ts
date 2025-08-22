import { Page, Locator } from "@playwright/test";

export class dradAndDropLocators {
readonly sliderFirst: Locator;
  readonly outputFirst: Locator;

  constructor(private page: Page) {

    this.sliderFirst = page.locator("//div[@class='sp__range']//input[@type='range']");
    this.outputFirst = page.locator("//div[@class='sp__range']//output[@id='range']");
  }
}
