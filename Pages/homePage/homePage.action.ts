import {Page,Locator,expect} from '@playwright/test';
export class homePageActions{
    protected message : string;
    constructor(protected page:Page) {}

    async waitForPageToLoad():Promise<void>{
        await this.page.waitForLoadState('load');
    }

    async navigateToHomePage(url:string){
        await this.page.goto(url);
    }
    async clickLinks(linkText:string){
        await this.waitForPageToLoad();
        const linkLocator = this.page.locator(`//a[text()="${linkText}"]`);
        await linkLocator.click();
    }
    async formHeadingVisible(pageHeading:string){ 
    await this.waitForPageToLoad();
    const pageTitle = this.page.locator(`//h1[text()='${pageHeading}']`);
    await expect(pageTitle).toBeVisible();
  }
    
};
