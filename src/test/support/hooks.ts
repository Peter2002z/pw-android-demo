import { Before, After } from '@cucumber/cucumber';
import { MobileWorld } from './mobile.world';

Before({ timeout: 60000 }, async function (this: MobileWorld) {
  await this.launchApp({ 'appium:noReset': false });
});

After(async function (this: MobileWorld) {
  await this.closeApp();
});
