import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FormPage extends BasePage {
  public averageForm = this.page.locator('[id="average-form"]');
  private getInputLocator = (name: string) => this.page.locator(`[id="${name}"]`);
  private genderMale = this.page.locator('[id="genderMale"]');
  private genderFemale = this.page.locator('[id="genderFemale"]');
  private getHobbyLocator = (name: string) => this.page.locator(`[name="hobby"][value="${name}"]`);
  public selectTime = (time: string) => this.page.getByLabel("Time:").selectOption(`${time}`);
  private submitBtn = this.page.locator('button[type="submit"]');

  async fillInputByName(name: string, text: string) {
    await this.getInputLocator(name).fill(text);
  }

  async fillInputs(data: { username: string; password: string }) {
    for (const [key, value] of Object.entries(data)) await this.getInputLocator(key).fill(value);
  }

  async selectGender(gender: "male" | "female") {
    const locator = gender === "male" ? this.genderMale : this.genderFemale;
    await locator.check();
  }

  async checkHobby(nameHobby: string) {
    await this.getHobbyLocator(nameHobby).check();
  }

  async clickSubmit() {
    await this.submitBtn.click();
  }
}
