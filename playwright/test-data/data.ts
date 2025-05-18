import { faker } from "@faker-js/faker";

export const registrationData = {
  username: faker.person.firstName(),
  password: faker.internet.password(),
};

export const hobby = {
  reading: "Reading",
  sports: "Sports",
  music: "Music",
};

export const gender = {
  male: "male",
  female: "female",
} as const;

export const time = {
  morning: "Morning",
  afternoon: "Noon",
  evening: "Afternoon",
};

export const testCases = [
  {
    name: "Submit form without username and password",
    fillInputs: false,
    fillInputsData: {},
    selectGender: gender.female,
    checkHobby: hobby.reading,
    selectTime: time.morning,
  },
  {
    name: "Submit form without gender",
    fillInputs: true,
    selectGender: null,
    checkHobby: hobby.music,
    selectTime: time.morning,
  },
  {
    name: "Submit form without hobby",
    fillInputs: true,
    selectGender: gender.female,
    checkHobby: null,
    selectTime: time.morning,
  },
  {
    name: "Submit form without time",
    fillInputs: true,
    selectGender: gender.female,
    checkHobby: hobby.music,
    selectTime: null,
  },
];
