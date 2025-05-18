# averageForm.e2e

## Requirements

- NodeJS **v18.12**

## Installation

- Run `npm install` to install all project dependencies.

## Start a server

- Run `npm run serve` to start the web server locally.

> ⚠️ The application runs at `http://localhost:3000` by default (or change according to your setup).

## How to run tests?

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

- `npx playwright test` — run all Playwright tests.
- `npx playwright test tests/averageForm.spec.ts` — run a single test file.
- `npx playwright test -g "Validation: show error when all fields are empty"` — run a specific test by title.
- `npx playwright test -g "Validation" --repeat-each=3` — run tests by title and repeat 3 times.

## How to run Codegen?

- `npx playwright codegen http://localhost:3000` — to explore the app and generate selectors.

## Folder Structure

- **`app/`** — contains the web application code.
- **`tests/`** — contains Playwright test files.
- **`tests/pages/`** — contains Page Object files.
- **`playwright.config.ts`** — Playwright configuration file.

## Best Practices

- Use **TypeScript** only for your tests.
- Use the **Page Object Model** to separate test logic from selectors.
- Format your code using Prettier or ESLint (if configured).
- Use meaningful test names and structure tests using `test.describe`.

## Example Test Structure

```ts
test.describe("Average Form: validation and submission tests", () => {
  test("Validation: show error when all fields are empty", async ({ page }) => {
    // Your test implementation here
  });

  test("Submission: successful form submission with valid data", async ({ page }) => {
    // Your test implementation here
  });
});
```

## Useful Links

- [Playwright Documentation](https://playwright.dev/)
- [Trace Viewer](https://trace.playwright.dev/)

---

### Assignment Overview

Congratulations! 🎉
You’ve just joined a fast-growing unicorn startup. Your first task is to automate testing for the newest feature: **"Your Average Form"**.

![Your average form image](public/webpage.jpg)

Your goals:

- Explore the "Your average form" page.
- Create testing scenarios (validation, submission, edge cases).
- Implement automated tests using **Playwright**.
- Maintain clean code structure and follow best practices.

Good luck and have fun! 🚀
