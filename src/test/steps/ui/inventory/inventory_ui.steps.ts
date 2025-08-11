import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';

Given('I log in with valid credentials', async function (this: MobileWorld) {
  await this.loginPage.login('standard_user', 'secret_sauce');
});

Then('I should see the inventory title', async function (this: MobileWorld) {
  const title = await this.inventoryPage.title;
  expect(await title.waitForDisplayed({ timeout: 10000 })).to.be.true;
});

Then('I should see at least one product item', async function (this: MobileWorld) {
  const products = await this.inventoryPage.products;
  expect(products.length).to.be.greaterThan(0);
});

Then('I should see the cart icon', async function (this: MobileWorld) {
  const cart = await this.inventoryPage.cartIcon;
  expect(await cart.isDisplayed()).to.be.true;
});
