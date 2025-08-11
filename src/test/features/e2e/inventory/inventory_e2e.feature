@e2e @inventory
Feature: Inventory interactions - SauceDemo

  Scenario: Add a product to the cart successfully
    Given I launch the SauceDemo app
    And I log in with valid credentials
    When I add the first product to the cart
    And I add the second product to the cart
    Then I should see the cart badge showing "2"
