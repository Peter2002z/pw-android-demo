import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';


When('I add the first product to the cart', async function (this: MobileWorld) {
  const firstAddButton = await this.driver.$('~test-ADD TO CART');
  await firstAddButton.waitForDisplayed({ timeout: 10000 });
  await firstAddButton.click();
});


Then('I should see the cart badge showing {string}', async function (this: MobileWorld, count: string) {
  const badge = await this.driver.$('~cart-badge');
  await badge.waitForDisplayed({ timeout: 10000 });
  const text = await badge.getText();
  console.log('Badge text:', text);
  expect(text).to.equal(count);
});



