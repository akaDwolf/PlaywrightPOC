# 🧪 Playwright Test Suite

This repository contains an automated end-to-end (E2E) test suite for validating the core workflows and user experience of the web application using **Playwright** and the **Page Object Model (POM)** structure.

---

## 📁 Project Structure

# PlaywrightPOC

PLAYWRIGHTPOC/
├── node_modules/                # Installed dependencies

├── pageObjects/                 # All page object classes (POM)

│   ├── guides.js

│   └── questions-js-listing.js

├── playwright-report/          # Auto-generated HTML test reports

│   └── index.html

├── test-data/                  # JSON test data files used in tests

│   ├── code.json

│   └── guide.json

├── test-results/               # Raw test output and screenshots

├── tests/                      # Playwright spec/test files

│   ├── guides.spec.js

│   └── question-js-listing.spec.js

├── .env                        # Environment-specific configs

├── .gitignore                  # Ignore files/folders from Git

├── package.json                # Project dependencies and scripts

├── package-lock.json           # Version lockfile

├── playwright.config.js        # Global Playwright settings

└── README.md                   # Project instructions

# 🎭 Playwright POC

This repository is a Playwright-based automation proof-of-concept designed to test critical workflows of the platform.

---

## 📦 Tech Stack

- [Playwright](https://playwright.dev/)
- JavaScript (Node.js)
- Page Object Model (POM)
- JSON-driven test data

---

## 🚀 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/playwright-poc.git
cd playwright-poc


```
### 2. Install dependencies
npm install

### 3. Install Playwright browsers
npx playwright install

## 🧪 Run Tests
npx playwright test

## Specific test file
npx playwright test tests/guides.spec.js

## Headed mode (see browser)
npx playwright test --headed

## Show last report
npx playwright show-report

# Project Structure
| Directory            | Purpose                                   |
| -------------------- | ----------------------------------------- |
| `pageObjects/`       | Page Object Models (guides, questions)    |
| `tests/`             | Test spec files with test.step logging    |
| `test-data/`         | Dynamic data for scenarios (e.g., guides) |
| `playwright-report/` | Auto-generated HTML reports               |
| `test-results/`      | Screenshots, trace, videos (if enabled)   |

# ✅ Features
📁 Modular POM architecture

🧾 Test step logging via test.step()

🔁 Reusable test data

📊 HTML reporting

🧩 Soft assertions + dynamic element checks

## 📌 Sample Scripts
| Script        | Command                        |
| ------------- | ------------------------------ |
| Run tests     | `npx playwright test`          |
| Debug tests   | `npx playwright test --debug`  |
| View report   | `npx playwright show-report`   |
| Generate test | `npx playwright codegen <url>` |

### 🧑‍💻 Contributors
Subhanka N
