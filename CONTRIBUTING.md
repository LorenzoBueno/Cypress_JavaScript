# Contributing & Running Locally

## Prerequisites

- [Node.js](https://nodejs.org/) installed (v24.15.0 or higher)
- [Git](https://git-scm.com/) installed
- Google Chrome installed

## Project Structure

```
cypress/
├── e2e/              # Test files
├── pages/            # Page objects
├── fixtures/         # Test data
├── reports/          # Generated test reports
├── screenshots/      # Captured on test failure (auto-deleted before each run)
└── support/          # Commands and global configuration
config-dev.js         # Dev environment configuration
config-qa.js          # QA environment configuration
cypress.config.js     # Base Cypress configuration
env-example.txt       # Environment variables reference
```

## 1. Clone the repository

```bash
git clone https://github.com/LorenzoBueno/Cypress-JavaScript---SwagLabs.git
cd Cypress-JavaScript---SwagLabs
```

## 2. Install dependencies

```bash
npm install
```

This will install all required packages:
- Cypress
- dotenv
- cypress-mochawesome-reporter
- cypress-multi-reporters
- mocha-junit-reporter

## 3. Set up environment variables

Create a `.env` file in the root of the project based on `env-example.txt`:
BASE_URL=https://www.saucedemo.com/
CYPRESS_USER=standard_user
CYPRESS_PASSWORD=secret_sauce

> ⚠️ The `.env` file is ignored by Git and should never be committed.
> In the Swag Lab website used in this project, the data contained in the .env are public.

## 4. Running the tests

### Open mode (interactive)

```bash
# Dev environment
npm run cy:open:dev

# QA environment
npm run cy:open:qa
```

### Run mode (headless)

```bash
# Dev environment
npm run cy:run:dev

# QA environment
npm run cy:run:qa
```

## 5. Reports

After running in run mode, test reports are automatically generated in `cypress/reports/`.
Screenshots are taken on test failure and deleted automatically before each new run.
