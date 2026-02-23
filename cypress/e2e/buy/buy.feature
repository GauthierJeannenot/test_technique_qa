Feature: Buy two products from the shop
  Background:
    Given i'm logged in as "standard_user"
    Then i am redirected to the "inventory" page


  Scenario: Adds two items to the cart, proceeds to checkout
    When i add "<item1>" to the cart
    When i add "<item2>" to the cart
    Then i check the shopping cart count for "<number_of_items>" items
    Then i proceed to the cart
    Then i am redirected to the "cart" page
    Then i check the cart for "<number_of_items>" items
    Then i proceed to the checkout page
    Then i am redirected to the "checkout-step-one" page
    Then i fill out my billing info with "<first_name>", "<last_name>" and "<postal_code>"
    Then i am redirected to the "checkout-step-two" page
    Then i check the sub-total for "<item1_price>" and "<item2_price>"
    Then i check the total for "<item_total>" and "<tax>"
    Then i proceed to the finish page
    Then i am redirected to the "checkout-complete" page
    Then i see the order confirmation
    


    Examples:
      | item1               | item2                 | number_of_items | first_name | last_name | postal_code | item1_price | item2_price | item_total | tax  |
      | sauce-labs-backpack | sauce-labs-bike-light | 2               | test       | test      | 92130       | 29.99       | 9.99        | 39.98      | 3.20 |