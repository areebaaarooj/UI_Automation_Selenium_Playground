import { Page, Locator } from "@playwright/test";

export class jQueryDropdownLocators {
readonly searchBox1: Locator;
readonly searchBox2: Locator;
  readonly searchDropDown: Locator;
  readonly multipleDropDown: Locator;
   readonly disableDropDown: Locator;
   readonly categoryDropDown: Locator;
  constructor(private page: Page) {
    this.searchBox1 = page.locator('//span[@class="select2-selection select2-selection--single"]');
    this.searchBox2 = page.locator('//input[@class="select2-search__field"]');
    this.searchDropDown = page.locator("//ul[@id='select2-country-results']//li");
    this.multipleDropDown = page.locator('//ul[@class="select2-results__options"]//li');
    this.categoryDropDown = page.locator("//select[@id='files']");
}
}
