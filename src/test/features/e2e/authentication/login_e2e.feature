@e2e @login
Feature: Login to SauceDemo app

  Scenario: User logs in successfully
    Given I launch the SauceDemo app
    When I enter valid username and password
    Then I should see the product screen
