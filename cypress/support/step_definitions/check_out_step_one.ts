import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { CheckOutStepOnePage } from "../../pages/CheckOutStepOnePage"; 

const checkoutStepOnePage = new CheckOutStepOnePage();

Then("i fill out my billing info with {string}, {string} and {string}", (firstName: string, lastName: string, postalCode: string) => {
  checkoutStepOnePage.fillBillingInfo(firstName, lastName, postalCode);
});
