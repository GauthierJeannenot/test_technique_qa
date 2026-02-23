import {  Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { InventoryPage } from "../../pages/InventoryPage";

const inventoryPage = new InventoryPage();

When(
  "i add {string} to the cart",
  (product: string) => {
    inventoryPage.addToCart(product);
  }
);

Then(
  "i check the shopping cart count for {string} items",
  (expectedCount: string) => {
    inventoryPage.checkCartCount(expectedCount);
  }
);

Then(
  "i proceed to the cart", () => {
    inventoryPage.proceedToCart();
  }
);
