import { test, expect } from "@playwright/test";

test("Practicing Locators", async ({ page }) => {
  await test.step("CSS Locator (by id and class)", async () => {
    await page.goto("https://www.saucedemo.com"); // Navigate to login page
    await page.locator("input#user-name").type("standard_user"); // Locate by ID
    await page.locator('input[data-test="password"]').fill("secret_sauce"); // Locate by data attribute
    await page.locator("input.submit-button.btn_action").click(); // Locate by class combination
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html"); // Verify successful login
  });

  await test.step("Locating through parent child nodes (css)", async () => {
    await page.goto("https://www.lambdatest.com/selenium-playground/"); // Open LambdaTest playground
    await page
      .locator(
        'li.pt-10 > a[href="https://www.lambdatest.com/selenium-playground/table-search-filter-demo"]'
      )
      .click(); // Click table filter demo link
    await expect(
      page
        .locator("table.table.table-hover.table-responsive > thead > tr > th")
        .first()
    ).toHaveText("#"); // Verify first column header is "#"
    await expect(
      page
        .locator("table.table.table-hover.table-responsive > thead > tr > th")
        .filter({ hasText: "Assignee" })
    ).toHaveText("Assignee"); // Verify column header "Assignee"
  });

  await test.step("Locating through parent child nodes (xpath)", async () => {
    await expect(
      page.locator(
        '//table[@class ="table table-hover table-responsive"]//thead//tr//th[text()="Task"]'
      )
    ).toBeVisible(); // Verify "Task" header using XPath
    await expect(
      page.locator(
        '//table[@class ="table table-hover table-responsive"]//thead//tr//th[contains(text(),"Status")]'
      )
    ).toBeVisible(); // Verify "Status" header using XPath
  });
});
