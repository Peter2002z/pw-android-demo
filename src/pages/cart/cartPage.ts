export default class CartPage {
  constructor(private driver: WebdriverIO.Browser) {}

  get title() {
    return this.driver.$('~test-Cart');
  }

  get continueShoppingButton() {
    return this.driver.$('~test-CONTINUE SHOPPING');
  }

  get checkoutButton() {
    return this.driver.$('~test-CHECKOUT');
  }

  get removeButtons() {
    return this.driver.$$(`~test-REMOVE`);
  }

  get cartItems() {
    return this.driver.$$(`~test-Item title`);
  }
}
