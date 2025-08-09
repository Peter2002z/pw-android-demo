import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';


When('I enter valid username and password', async function (this: MobileWorld) {
  await this.loginPage.login('standard_user', 'secret_sauce');
});

Then('I should see the product screen', async function (this: MobileWorld) {
  const productTitle = await this.driver.$('~test-PRODUCTS');
  const isDisplayed = await productTitle.waitForDisplayed({ timeout: 10000 });
  expect(isDisplayed).to.be.true;
});
