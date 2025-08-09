@ui @inventory
Feature: Inventory screen UI validation - SauceDemo

  Scenario: UI elements on inventory screen are visible
    Given I launch the SauceDemo app
    And I log in with valid credentials
    Then I should see the inventory title
    And I should see at least one product item
    And I should see the cart icon
