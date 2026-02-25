// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.pause();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('I can log in to booking site', async ({ request }) => {
  const responses = await request.post('https://restful-booker.herokuapp.com/auth', {
    data: {
      "username" : "admin",
      "password": "password123"
    }
  });

    expect(responses.ok()).toBeTruthy()
    expect(await responses.json()).toHaveProperty("token") 
});

// security testing
test('token is different for different user', async ({ request }) => {
  let token, old_token, new_token
  let responses = await request.post('https://restful-booker.herokuapp.com/auth', {
    data: {
      "username" : "admin",
      "password": "password123"
    }
  });

  token = await responses.json()
  old_token = token.token 

  responses = await request.post('https://restful-booker.herokuapp.com/auth', {
    data: {
      "username" : "admin",
      "password": "password123"
    }
  });
  token = await responses.json()
  new_token = token.token

  expect(old_token).not.toEqual(new_token)

});

test("I can create booking succesfully", async ({ request }) => {

})
//test made 2 bookings, different user, and different booking, get them both, make sure its different
//update booking, name, get booking
//update booking, check for schema

//