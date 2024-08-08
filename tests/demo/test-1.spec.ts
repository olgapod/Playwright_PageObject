import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://www.curated.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByTestId('auth-email-or-phone-field').click();
  await page
    .getByTestId('auth-email-or-phone-field')
    .fill('opodlesnyuk1@gmail.com');
  await page.getByRole('button', { name: 'Continue →' }).click();
  await page.getByTestId('auth-password-field').fill('Qwerty12');
  await page.getByRole('button', { name: 'Continue →' }).click();
  await page.getByLabel('Close chat').click();
  await page.getByRole('link', { name: 'Olg' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});
