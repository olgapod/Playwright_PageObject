import { test, expect } from '@playwright/test';

test.describe('All my tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.curated.com/');
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.pause();
    await page
      .locator('Email or phone number')
      .toBeVisible()
      .fill('opodlesnyuk1@gmail.com');
    await page.locator('Password').click().fill('Qwerty12');
    // await expect(l3.orl4.nth(0)).toBeVisible().fill('Qwerty12');
    await page.getByRole('button', { name: 'Continue →' }).click();
    await page.getByRole('button', { name: 'Accept' }).click();
  });

  //   test.afterAll(async ({ page }) => {
  //     await page.close();
  //   });

  test('homepage', async ({ page }) => {
    await page
      .getByRole('link', { name: 'Orvis Pro Trout Smooth Fly' })
      .click();
    await page.getByLabel('Close chat').click();
    await page.getByTestId('product-add-to-cart').click();
  });

  test.only('logout', async ({ page }) => {
    await page.getByRole('link', { name: 'Olg' }).click();
    await page.getByRole('link', { name: 'Sign Out' }).click();
    await page.close();
  });
});
