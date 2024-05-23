import { expect, type Page } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly dropDownSelector: string;
  readonly acceptButtonSelector: string;
  readonly returnHomeButtonSelector: string;
  readonly url ="https://www.polestar.com/se/developer/get-started/";

  constructor(page: Page) {
    this.page = page;
    this.dropDownSelector = 'a.css-kp9g7';
    this.acceptButtonSelector = 'button#onetrust-accept-btn-handler';
    this.returnHomeButtonSelector = 'text=Return Home';
  }

  async waitUntilLoaded(){
    await this.page.waitForSelector(this.acceptButtonSelector);  
  }
  async navigate(){
    await this.page.goto(this.url );
  }

  async clickAcceptCookieButton(){
    await this.page.click(this.acceptButtonSelector);
  }

  async getReturnHomeButton(){
    return this.returnHomeButtonSelector;
  }

  async getDropDownSelector(){
    return this.dropDownSelector;
  }
  
}