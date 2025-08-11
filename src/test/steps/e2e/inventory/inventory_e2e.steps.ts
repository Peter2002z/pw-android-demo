import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';


When('I add the first product to the cart', async function (this: MobileWorld) {
  const firstAddButton = await this.driver.$('~test-ADD TO CART');
  await firstAddButton.waitForDisplayed({ timeout: 10000 });
  await firstAddButton.click();
});
When('I add the second product to the cart', async function (this: MobileWorld) {
  const firstAddButton = await this.driver.$('~test-ADD TO CART');
  await firstAddButton.waitForDisplayed({ timeout: 10000 });
  await firstAddButton.click();
});

Then('I should see the cart badge showing {string}', async function (this: MobileWorld, count: string) {
  const badgeCount = await this.inventoryPage.getCartBadgeCount();
  console.log('expected: '+ count);
  console.log('actual: '+ badgeCount);
  expect(badgeCount).to.equal(count);
});

