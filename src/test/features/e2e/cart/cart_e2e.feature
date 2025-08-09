@e2e @cart
Feature: Cart interactions - SauceDemo

  Scenario: Remove a product from the cart
    Given I launch the SauceDemo app
    And I log in with valid credentials
    And I add the first product to the cart
    And I navigate to the cart
    When I remove the product from the cart
    Then I should see the cart is empty
