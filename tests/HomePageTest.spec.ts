import { test, expect  } from '@playwright/test';
import { HomePage } from '../polestar/pageobjects/homePage/homePage';
import { AcceptCookieDialog } from '../polestar/pageobjects/homePage/dialogs/acceptCookieDialog';

let homePage:  HomePage;
let acceptCookieDialog: AcceptCookieDialog;
test.describe('Home Page', () => {
  test.beforeEach(async({ page}) => {
     homePage = new HomePage(page);
     acceptCookieDialog = new AcceptCookieDialog(page);
     await homePage.navigate();
     await acceptCookieDialog.waitUntilLoaded();
     await acceptCookieDialog.clickAcceptAllCookieButton();  
   });

  test('should navigate to home page', async ({ page }) => {  

    await expect(page.locator(await homePage.getReturnHomeButton())).toBeVisible();

  });
  
});

