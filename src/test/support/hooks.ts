import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser } from 'webdriverio'; // WebdriverIO cho Appium
import LoginPage from '../../pages/authentication/login.page';


export class MobileWorld extends World {
  driver!: Browser;
  loginPage!: LoginPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async launchApp(capabilities: any) {
    const { remote } = await import('webdriverio');
    this.driver = await remote({
      path: '/wd/hub',
      port: 4723,
      capabilities,
    });

    // Khởi tạo page object
    this.loginPage = new LoginPage(this.driver);
  }

  async closeApp() {
    if (this.driver) {
      await this.driver.deleteSession();
    }
  }
}

setWorldConstructor(MobileWorld);
