import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { CheckOutStepTwoPage } from "../../pages/CheckoutStepTwoPage"; 

const checkoutStepTwoPage = new CheckOutStepTwoPage();

Then("i check the sub-total for {string} and {string}", (item1_price: string, item2_price: string) => {
  checkoutStepTwoPage.checkSubTotal(item1_price, item2_price);
});

Then("i check the total for {string} and {string}", (itemTotal: string, tax: string) => {
  checkoutStepTwoPage.checkTotalWithTax(itemTotal, tax);
});

Then("i proceed to the finish page", () => {
  checkoutStepTwoPage.proceedToFinish();
});