import { dradAndDropLocators } from "./dragAndDropSlider.locator";
import { Page, expect } from "@playwright/test";
import { homePageActions } from "../homePage/homePage.action";

export class dradAndDropActions extends homePageActions {
  readonly locators: dradAndDropLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new dradAndDropLocators(page);
  }
  async dragSliderTo(value: number): Promise<void> {
    await this.waitForPageToLoad();
    const box = await this.locators.sliderFirst.boundingBox();
    if (!box) return;

    const y = box.y + box.height / 2;
    const min = 1;
    const max = 100;

    const ratio = (value - min) / (max - min);
    const targetX = box.x + ratio * box.width;

    await this.page.mouse.move(box.x, y);
    await this.page.mouse.down();
    await this.page.mouse.move(targetX, y, { steps: 15 });
    await this.page.mouse.up();
  }
}
