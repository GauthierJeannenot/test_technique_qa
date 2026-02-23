import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/LoginPage";

const loginPage = new LoginPage();

When(
  "i'm logged in as {string}",
  (username: string) => {
    loginPage.visit();
    loginPage.fillUsername(username).fillPassword("secret_sauce");
    loginPage.submit();
  }
);

