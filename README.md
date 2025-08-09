# Automation Appium TypeScript

This project uses **Appium**, **WebdriverIO**, **CucumberJS**, and **TypeScript** to create automated mobile tests for Android applications.  
Currently supports testing for **SauceDemo**

---

## 📂 Project Structure

```
automation-appium-ts/
│
├── src/
│ ├── configs/
│ │ └── android.capabilities.ts # Appium capabilities configuration
│ │
│ ├── pages/ # Page Object Model
│ │ ├── authentication/
│ │ ├── cart/
│ │ └── inventory/
│ │
│ ├── test/
│ │ ├── features/ # Cucumber feature files (.feature)
│ │ │ ├── e2e/
│ │ │ └── ui/
│ │ ├── steps/ # Step Definitions
│ │ │ ├── e2e/
│ │ │ └── ui/
│ │
│ └── support/
│ ├── hooks.ts # Cucumber hooks
│ └── mobile.world.ts # Driver initialization & shared context
│
├── .env # Environment variables (Android SDK, app path, etc.)
├── cucumber.js # Cucumber configuration
├── package.json
├── README.md
└── tsconfig.json
```

## 🛠 Prerequisites

- **Node.js** >= 18
- **Appium** v2.x and Appium Inspector
- **Android Studio** + Android SDK (`ANDROID_HOME` environment variable set)
- **Java JDK** 11+
- An Android Emulator (AVD) or a real device
- ChromeDriver (if testing WebViews)

## 📦 Installation

```bash
# Install project dependencies
npm install

# Install Appium v2 if not already installed
npm install -g appium

# Install UiAutomator2 driver
appium driver install uiautomator2

```

## ⚙️ Environment Setup

```
ANDROID_HOME=C:\Users\<username>\AppData\Local\Android\Sdk
APPIUM_SERVER=http://localhost:4723
DEVICE_NAME=emulator-5554
PLATFORM_VERSION=11.0
APP_PATH=apps/saucedemo.apk

```

## ▶️ Running Tests


### 1. Start the Appium server
```
appium
```

### 2. Start emulator or connect a device
```
adb devices
```

### 3. Run UI tests
```
npx cucumber-js --tags "@ui"
```
### 4. Run End-to-End (E2E) tests
```
npx cucumber-js --tags "@e2e"
```


## 📌 Tags
```
@ui – Verifies UI elements are visible and correctly displayed
```
```
@e2e – Runs full end-to-end user flows (login, add to cart, checkout, etc.)
```


