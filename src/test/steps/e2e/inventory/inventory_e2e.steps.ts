import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';


When('I add the first product to the cart', async function (this: MobileWorld) {
  const addButtons = await this.driver.$$(`~test-ADD TO CART`);
  await addButtons[0].click();
});

Then('I should see the cart badge showing {string}', async function (this: MobileWorld, count: string) {
  const badge = await this.driver.$(`~test-${count}`);
  expect(await badge.isDisplayed()).to.be.true;
});
