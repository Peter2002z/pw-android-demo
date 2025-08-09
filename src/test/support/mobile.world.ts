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
  cartPage!: CartPage;        // Page Object

  constructor(options: IWorldOptions) {
    super(options);
  }

  /**
   * Launch mobile app (Android hoặc iOS) với capabilities tùy chọn.
   * Nếu không truyền capabilities, sẽ dùng mặc định Android.
   * Truyền vào chỉ override field cần thay đổi, không mất config gốc.
   */
  async launchApp(caps?: WebdriverIO.Capabilities) {
    const { androidCaps } = await import('../../configs/android.capabilities');

    // Merge để không bị mất các capability bắt buộc
    const capabilities = { ...androidCaps, ...caps };

    this.driver = await remote({
      // path: '/wd/hub', // bật nếu Appium server dùng path cũ
      port: 4723,
      logLevel: 'error',
      capabilities,
    });

    // Khởi tạo page object
    this.loginPage = new LoginPage(this.driver);
    this.inventoryPage = new InventoryPage(this.driver);
    this.cartPage = new CartPage(this.driver);
  }

  /**
   * Kết thúc phiên Appium, tắt app nếu đang mở.
   */
  async closeApp() {
    if (this.driver) {
      try {
        // Nếu muốn đảm bảo app tắt hẳn, có thể terminateApp trước
        // await this.driver.terminateApp('com.swaglabsmobileapp');
        await this.driver.deleteSession();
      } catch (err) {
        console.error('Lỗi khi đóng app:', err);
      }
    }
  }
}

setWorldConstructor(MobileWorld);
