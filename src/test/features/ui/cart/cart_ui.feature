@ui @cart
Feature: Cart screen UI validation - SauceDemo

  Scenario: UI elements on cart screen are visible
    Given I launch the SauceDemo app
    And I log in with valid credentials
    And I navigate to the cart
    Then I should see the cart title
    And I should see the continue shopping button
    And I should see the checkout button
