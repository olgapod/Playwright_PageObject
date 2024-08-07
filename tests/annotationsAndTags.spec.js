import { test } from '@playwright/test';

test.skip('one test', async ({ page }) => {});

test('not ready yet', async ({ page }) => {
  test.fail();
});

test.fixme('test to be fixed', async ({ page }) => {});

test('slow test', async ({ page }) => {
  test.slow();
});

test('new test @smoke', async ({ page }) => {});
