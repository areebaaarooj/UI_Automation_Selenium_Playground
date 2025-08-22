import { Page, Locator } from "@playwright/test";

export class bootstrapDualListDemoLocators {
  readonly searchBox1: Locator;
  readonly searchBox2: Locator;
  readonly listItem1: Locator;
  readonly listItem2: Locator;
  readonly moveLeft: Locator;
  readonly moveRight: Locator;

  constructor(private page: Page) {
    this.searchBox1 = page.locator("(//input[@type='text' and @name='SearchDualList'])[1]");
    this.searchBox2 = page.locator("(//input[@type='text' and @name='SearchDualList'])[2]");
    this.listItem1 = page.locator("(//ul[contains(@class,'list-group')])[1]//li");
    this.listItem2 = page.locator("(//ul[contains(@class,'list-group')])[2]//li");
    this.moveLeft = page.locator("//button[contains(@class,'move-left')]");
    this.moveRight = page.locator("//button[contains(@class,'move-right')]");
  }
}
