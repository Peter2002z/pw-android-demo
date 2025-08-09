@login @ui
Feature: Login screen UI validation - SauceDemo

  Scenario: UI elements on login screen are visible
    Given I launch the SauceDemo app
    Then I should see username field
    And I should see password field
    And I should see login button
