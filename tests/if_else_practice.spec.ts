import { test, expect } from '@playwright/test';

function oddEvenCheck (input: number){
  if (input % 2 == 0){
    console.log('The number is even.')
  } else {
    console.log('The number is odd.')
  }}

  test("is positive", async () => {
    const result = oddEvenCheck(1);
    expect(result).toBeTruthy();
  });
  








test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
