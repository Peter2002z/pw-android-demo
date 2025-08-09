import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MobileWorld } from '../../../support/mobile.world';


Given('I launch the SauceDemo app', { timeout: 60000 }, async function (this: MobileWorld) {
  // Mở app mà không reset data để load nhanh hơn
  await this.launchApp({ 'appium:noReset': true });

  // Chờ app ổn định trong 3 giây (tránh load chưa kịp)
  await this.driver.pause(3000);
});

Then('I should see username field', async function (this: MobileWorld) {
  expect(await this.loginPage.usernameInput.isDisplayed()).to.be.true;
});

Then('I should see password field', async function (this: MobileWorld) {
  expect(await this.loginPage.passwordInput.isDisplayed()).to.be.true;
});

Then('I should see login button', async function (this: MobileWorld) {
  expect(await this.loginPage.loginButton.isDisplayed()).to.be.true;
});
