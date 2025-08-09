import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';

Given('I log in with valid credentials', async function (this: MobileWorld) {
  await this.loginPage.usernameInput.setValue('standard_user');
  await this.loginPage.passwordInput.setValue('secret_sauce');
  await this.loginPage.loginButton.click();
});

Then('I should see the inventory title', async function (this: MobileWorld) {
  const title = await this.driver.$('~test-PRODUCTS');
  expect(await title.waitForDisplayed({ timeout: 10000 })).to.be.true;
});

Then('I should see at least one product item', async function (this: MobileWorld) {
  const products = await this.driver.$$(`~test-Item title`);
  expect(products.length).to.be.greaterThan(0);
});

Then('I should see the cart icon', async function (this: MobileWorld) {
  const cart = await this.driver.$('~test-Cart');
  expect(await cart.isDisplayed()).to.be.true;
});
