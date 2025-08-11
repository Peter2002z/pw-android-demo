import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';


When('I remove the product from the cart', async function (this: MobileWorld) {
  const removeButtons = await this.cartPage.removeButtons;
  if ((await removeButtons.length) > 0) { 
    await removeButtons[0].click();
  }
});

Then('I should see the cart is empty', async function (this: MobileWorld) {
  const items = await this.cartPage.cartItems
  expect(items.length).to.equal(0);
});
