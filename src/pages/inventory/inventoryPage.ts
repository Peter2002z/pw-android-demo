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

  get cartBadgeTextElement() {
  return this.driver.$('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView');
}

async getCartBadgeCount() {
  const badgeTextEl = await this.cartBadgeTextElement;
  if (await badgeTextEl.isDisplayed()) {
    return await badgeTextEl.getText();
  }
  return null;
}


}
