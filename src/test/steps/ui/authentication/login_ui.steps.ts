import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';


Then('I should see username field', async function (this: MobileWorld) {
  expect(await this.loginPage.usernameInput.isDisplayed()).to.be.true;
});

Then('I should see password field', async function (this: MobileWorld) {
  expect(await this.loginPage.passwordInput.isDisplayed()).to.be.true;
});

Then('I should see login button', async function (this: MobileWorld) {
  expect(await this.loginPage.loginButton.isDisplayed()).to.be.true;
});
