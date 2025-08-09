import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';

Given('I log in with valid credentials', async function (this: MobileWorld) {
  await this.loginPage.usernameInput.setValue('standard_user');
  await this.loginPage.passwordInput.setValue('secret_sauce');
  await this.loginPage.loginButton.click();
});

When('I add the first product to the cart', async function (this: MobileWorld) {
  const addButtons = await this.driver.$$(`~test-ADD TO CART`);
  await addButtons[0].click();
});

Then('I should see the cart badge showing {string}', async function (this: MobileWorld, count: string) {
  const badge = await this.driver.$(`~test-${count}`);
  expect(await badge.isDisplayed()).to.be.true;
});
