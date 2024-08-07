const { test, expect } = require('@playwright/test');
const { hello, helloworld } = require('./demo/hello.js');

test('My first test', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle('Google');
});
