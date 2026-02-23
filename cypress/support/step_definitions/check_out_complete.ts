import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { CheckOutCompletePage } from "../../pages/CheckOutCompletePage"; 

const checkoutCompletePage = new CheckOutCompletePage();

Then("i see the order confirmation", () => {
  checkoutCompletePage.checkOrderSuccess();
});
