import { test as base, Page } from "@playwright/test";
import { FormPage } from "../pages/FormPage";
type FormFixture = {
  formPage: FormPage;
};

export const test = base.extend<FormFixture>({
  formPage: async ({ page }, use) => {
    const formPage = new FormPage(page);
    await formPage.goTo();
    await use(formPage);
  },
});
export const expect = base.expect;
