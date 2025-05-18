import { expect, test } from "../fixtures/baseFixture.ts";
import { registrationData, testCases, gender, hobby, time } from "../test-data/data.ts";

test.describe("Average Form: validation and submission tests", () => {
  test("Fill form with valid data.", async ({ formPage, page }) => {
    await test.step("Fill in username and password", async () => {
      await formPage.fillInputs(registrationData);
    });

    await test.step("Select gender: female", async () => {
      await formPage.selectGender(gender.female);
    });

    await test.step("Select hobby: Music", async () => {
      await formPage.checkHobby(hobby.music);
    });

    await test.step("Select time: Morning", async () => {
      await formPage.selectTime(time.morning);
    });

    await test.step("Click Submit", async () => {
      await formPage.clickSubmit();
    });
    await test.step("Verify redirection and result page", async () => {
      await page.waitForURL("http://localhost:3000/results");
      await expect(page).toHaveTitle("Results");
      await expect(page.getByText("Greetings"), `${registrationData.username}`).toBeVisible();
      await expect(formPage.averageForm).toBeHidden();
    });
  });

  testCases.forEach(({ name, fillInputs, selectGender, checkHobby, selectTime }) => {
    test(name, async ({ formPage }) => {
      await test.step("Fill in only available fields", async () => {
        if (fillInputs) {
          await formPage.fillInputs(registrationData);
        }
        if (selectGender) {
          await formPage.selectGender(gender.female);
        }
        if (checkHobby) {
          await formPage.checkHobby(checkHobby);
        }
        if (selectTime) {
          await formPage.selectTime(selectTime);
        }
      });

      await test.step("Click Submit", async () => {
        await formPage.clickSubmit();
      });

      await test.step("Verify that the form is still visible ", async () => {
        await expect(formPage.averageForm).toBeVisible();
      });
    });
  });
});
