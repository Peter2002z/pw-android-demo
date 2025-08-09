export default class LoginPage {
  constructor(private driver: WebdriverIO.Browser) {}

  get usernameInput() {
    return this.driver.$('~test-Username'); // accessibility id
  }

  get passwordInput() {
    return this.driver.$('~test-Password');
  }

  get loginButton() {
    return this.driver.$('~test-LOGIN');
  }

  async login(username: string, password: string) {
    await this.usernameInput.waitForDisplayed({ timeout: 10000 });
    await this.usernameInput.setValue(username);

    await this.passwordInput.waitForDisplayed({ timeout: 10000 });
    await this.passwordInput.setValue(password);

    await this.loginButton.waitForDisplayed({ timeout: 10000 });
    await this.loginButton.click();
  }
}
