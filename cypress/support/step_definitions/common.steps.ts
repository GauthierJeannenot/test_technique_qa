import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("i am redirected to the {string} page", (pageName: string) => {
  cy.url().should("include", `/${pageName.toLowerCase()}`);
});

