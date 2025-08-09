export default class InventoryPage {
  constructor(private driver: WebdriverIO.Browser) {}

  get title() {
    return this.driver.$('~test-PRODUCTS');
  }

  get products() {
    return this.driver.$$(`~test-Item title`);
  }

  get cartIcon() {
    return this.driver.$('~test-Cart');
  }

  get addToCartButtons() {
    return this.driver.$$(`~test-ADD TO CART`);
  }

  cartBadge(count: string) {
    return this.driver.$(`~test-${count}`);
  }
}
