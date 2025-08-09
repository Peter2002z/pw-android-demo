import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';


When('I enter valid username and password', async function (this: MobileWorld) {
  const usernameField = await this.driver.$('~test-Username');
  await usernameField.waitForDisplayed({ timeout: 10000 });
  await usernameField.setValue('standard_user');

  const passwordField = await this.driver.$('~test-Password');
  await passwordField.waitForDisplayed({ timeout: 10000 });
  await passwordField.setValue('secret_sauce');

  const loginButton = await this.driver.$('~test-LOGIN');
  await loginButton.waitForDisplayed({ timeout: 10000 });
  await loginButton.click();
});

Then('I should see the product screen', async function (this: MobileWorld) {
  const productTitle = await this.driver.$('~test-PRODUCTS');
  const isDisplayed = await productTitle.waitForDisplayed({ timeout: 10000 });
  expect(isDisplayed).to.be.true;
});
