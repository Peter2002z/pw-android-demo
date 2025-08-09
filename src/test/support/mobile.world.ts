import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, remote } from 'webdriverio';
import LoginPage from '../../pages/authentication/login.page';
import dotenv from 'dotenv';
import InventoryPage from '../../pages/inventory/inventoryPage';
import CartPage from '../../pages/cart/cartPage';
dotenv.config(); // Load biến từ .env

export class MobileWorld extends World {
  driver!: Browser;           // Phiên test Appium
  loginPage!: LoginPage;      // Page Object
  inventoryPage!: InventoryPage;      // Page Object
  cartPage!: CartPage;      // Page Object

  constructor(options: IWorldOptions) {
    super(options);
  }

  /**
   * Launch mobile app (Android or iOS) với capabilities tùy chọn.
   * Nếu không truyền capabilities, sẽ dùng mặc định Android.
   */
  async launchApp(caps?: WebdriverIO.Capabilities) {
    const { androidCaps } = await import('../../configs/android.capabilities');
    const capabilities = caps ?? androidCaps;

    this.driver = await remote({
        // path: '/wd/hub',
        port: 4723,
        logLevel: 'error',
        capabilities,
    });

    this.loginPage = new LoginPage(this.driver);
    this.inventoryPage = new InventoryPage(this.driver);
    this.cartPage = new CartPage(this.driver);
}


  /**
   * Kết thúc phiên Appium
   */
  async closeApp() {
    if (this.driver) {
      await this.driver.deleteSession();
    }
  }
}

setWorldConstructor(MobileWorld);
