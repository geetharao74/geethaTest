import { Page, expect } from "@playwright/test";

export class AcceptCookieDialog {
  readonly page: Page;
  readonly acceptAllCookieButtonSelector: string;
  readonly rejectAllCookieButtonSelector: string;
  readonly dialogTitleSelector: string;
  readonly dialogTitle: string;

  constructor (page: Page){
    this.page = page;
    this.acceptAllCookieButtonSelector = 'button#onetrust-accept-btn-handler';
    this.rejectAllCookieButtonSelector = 'button#onetrust-reject-all-handler';
    this.dialogTitleSelector = 'h2#onetrust-policy-title';
    this.dialogTitle = 'Hello from Polestar';
  }

  async waitUntilLoaded(){
    await this.page.waitForSelector(this.acceptAllCookieButtonSelector);
  }

  async clickAcceptAllCookieButton(){
    await this.page.locator(this.rejectAllCookieButtonSelector).click();
  }
  async clickRejectAllCookieButton(){
      await this.page.locator(this.rejectAllCookieButtonSelector).click();
  }

  async verifyDialogTitle(){
      await expect(this.page.locator(this.dialogTitle)).toContainText(this.dialogTitle);
  }


}