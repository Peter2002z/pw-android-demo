import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';

Given('I navigate to the cart', async function (this: MobileWorld) {
  await this.inventoryPage.cartIcon.click();
});

Then('I should see the cart title', async function (this: MobileWorld) {
  const title = await this.cartPage.title;
  expect(await title.waitForDisplayed({ timeout: 10000 })).to.be.true;
});

Then('I should see the continue shopping button', async function (this: MobileWorld) {
  const continueBtn = await this.cartPage.continueShoppingButton;
  expect(await continueBtn.isDisplayed()).to.be.true;
});

Then('I should see the checkout button', async function (this: MobileWorld) {
  const checkoutBtn = await this.cartPage.checkoutButton;
  expect(await checkoutBtn.isDisplayed()).to.be.true;
});
