import { test, expect } from '@playwright/test';
import exp from 'constants';

test('verify homePage', async ({ page }) => {
  await page.goto('https://www.polestar.com/se/developer/get-started');
  
  const acceptButtonSelector = 'button#onetrust-accept-btn-handler';
  await page.waitForSelector(acceptButtonSelector);
  await page.click(acceptButtonSelector);

  await expect(page.locator('a.css-kp9g7')).toBeVisible();
  await expect(page.locator('text=Return Home')).toBeVisible();
  
});

