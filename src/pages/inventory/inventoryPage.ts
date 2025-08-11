export default class InventoryPage {
  constructor(private driver: WebdriverIO.Browser) {}

  get title() {
    return this.driver.$('~test-PRODUCTS');
  }
  get products() {
  return this.driver.$$(`~test-Item_title`);
}

  get cartIcon() {
    return this.driver.$('~test-Cart');
  }

  get addToCartButtons() {
  return this.driver.$('~test-ADD TO CART');
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
async waitForProducts(timeout = 15000): Promise<WebdriverIO.Element[]> {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const products = await this.products;
    const productsArray = Array.isArray(products) ? products : Array.from(products);
    if (productsArray.length > 0) {
      return productsArray;
    }
    await new Promise(r => setTimeout(r, 500));
  }
  throw new Error('No products found on product screen after waiting');
}
}
