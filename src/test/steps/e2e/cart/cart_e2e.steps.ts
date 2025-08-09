import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';

Given('I add the first product to the cart', async function (this: MobileWorld) {
  const addButtons = await this.inventoryPage.addToCartButtons;
  await addButtons[0].click();
});

When('I remove the product from the cart', async function (this: MobileWorld) {
  const removeButtons = await this.driver.$$(`~test-REMOVE`);
  if ((await removeButtons.length) > 0) { 
    await removeButtons[0].click();
  }
});

Then('I should see the cart is empty', async function (this: MobileWorld) {
  const items = await this.driver.$$(`~test-Item title`);
  expect(items.length).to.equal(0);
});
