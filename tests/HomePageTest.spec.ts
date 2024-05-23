import { test, expect  } from '@playwright/test';
import { HomePage } from '../polestar/pageobjects/homePage/homePage';

let homePage:  HomePage;
test.describe('Home Page', () => {
  test.beforeEach(async({ page}) => {
     homePage = new HomePage(page);
     await homePage.navigate();
     await homePage.waitUntilLoaded();
     await homePage.clickAcceptCookieButton();  
   });

  test('should navigate to home page', async ({ page }) => {  
    
    await expect(page.locator(await homePage.getReturnHomeButton())).toBeVisible();

  });
  
});

