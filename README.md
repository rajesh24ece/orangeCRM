# 🚀 OrangeCRM Automation Framework

A scalable and maintainable **End-to-End Test Automation Framework** built using **Playwright** and **TypeScript** following the **Page Object Model (POM)** design pattern.

This project demonstrates modern automation testing practices including UI automation, API testing, Data-Driven Testing, Cross-Browser Testing, CI/CD integration, and reporting.

---

# 📌 Project Overview

This automation framework is designed to validate the OrangeCRM application efficiently using industry-standard best practices.

The framework focuses on:

- Scalable Architecture
- Clean Code Principles
- Reusable Components
- Easy Maintenance
- Faster Test Execution
- CI/CD Ready

---

# 🛠 Tech Stack

| Technology | Description |
|------------|-------------|
| Playwright | End-to-End Testing |
| TypeScript | Programming Language |
| Node.js | Runtime Environment |
| npm | Package Manager |
| Git | Version Control |
| GitHub | Source Code Repository |
| GitHub Actions | Continuous Integration |
| Allure Report | Advanced Reporting |
| HTML Report | Playwright Report |

---

# 📂 Project Structure

```
orangeCRM
│
├── .github
│   └── workflows
│
├── fixtures
│
├── helpers
│
├── locators
│
├── pages
│
├── test-data
│
├── tests
│
├── utils
│
├── screenshots
│
├── test-results
│
├── playwright-report
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⭐ Framework Features

✅ Playwright with TypeScript

✅ Page Object Model (POM)

✅ API Automation

✅ Cross Browser Testing

✅ Parallel Execution

✅ Data Driven Testing

✅ Environment Configuration

✅ Reusable Utilities

✅ Screenshot on Failure

✅ Video Recording

✅ Trace Viewer

✅ HTML Reports

✅ Allure Reports

✅ CI/CD using GitHub Actions

✅ Logging Support

✅ Assertions

✅ Locator Management

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/rajesh24ece/orangeCRM.git
```

Go to project directory

```bash
cd orangeCRM
```

Install dependencies

```bash
npm install
```

Install Playwright Browsers

```bash
npx playwright install
```

---

# ▶️ Run Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/login.spec.ts
```

Run tests in headed mode

```bash
npx playwright test --headed
```

Run tests in Chromium

```bash
npx playwright test --project=chromium
```

Run tests in Firefox

```bash
npx playwright test --project=firefox
```

Run tests in WebKit

```bash
npx playwright test --project=webkit
```

---

# 📊 Reports

Generate Playwright Report

```bash
npx playwright show-report
```

Generate Allure Report

```bash
allure serve allure-results
```

---

# 📷 Screenshots

Screenshots are automatically captured whenever a test fails.

```
test-results/
```

---

# 🎥 Video Recording

Videos are automatically recorded for failed tests.

```
test-results/
```

---

# 🔍 Trace Viewer

Open Playwright Trace

```bash
npx playwright show-trace trace.zip
```

---

# 🌐 Supported Browsers

- Chromium
- Firefox
- WebKit
- Microsoft Edge
- Google Chrome

---

# 🧪 Sample Test

```typescript
import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com');

    await page.locator('[name="username"]').fill('Admin');

    await page.locator('[name="password"]').fill('admin123');

    await page.locator('button[type="submit"]').click();

    await expect(page).toHaveURL(/dashboard/);

});
```

---

# 📈 CI/CD

This project supports GitHub Actions.

Pipeline includes

- Install Dependencies
- Install Playwright Browsers
- Execute Tests
- Generate Reports
- Upload Artifacts

---

# 🎯 Best Practices

- Page Object Model
- Reusable Components
- Common Utilities
- Locator Separation
- Centralized Test Data
- Environment Configuration
- Explicit Assertions
- Clean Folder Structure
- Modular Design

---

# 📋 Future Enhancements

- Docker Integration
- Jenkins Pipeline
- Azure DevOps Pipeline
- Slack Notifications
- Email Reports
- Visual Testing
- Database Validation
- Accessibility Testing
- Performance Testing

---

# 👨‍💻 Author

**Rajesh Kumar Pandian**

Senior Software Test Automation Engineer

### Skills

- Playwright
- Selenium
- TypeScript
- Java
- REST API Testing
- Postman
- Jenkins
- GitHub Actions
- Azure DevOps
- TestNG
- JUnit
- SQL

---

# 🤝 Contributions

Contributions, suggestions, and improvements are always welcome.

Feel free to fork this repository and submit a Pull Request.

---

# ⭐ Support

If you found this project useful,

Please ⭐ Star this repository.

It motivates me to build more automation frameworks and share testing knowledge with the community.

---

# 📄 License

This project is licensed under the MIT License.

---

## Thank You ❤️

Happy Testing!
