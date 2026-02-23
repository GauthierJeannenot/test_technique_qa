import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { CartPage } from "../../pages/CartPage";

const cartPage = new CartPage();

Then("i check the cart for {string} items", (numberOfItems: string) => {
  cartPage.checkForNumberOfItemsInCart(numberOfItems);
});

Then("i proceed to the checkout page", () => {
  cartPage.proceedToCheckout();
});