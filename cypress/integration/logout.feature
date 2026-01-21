Feature: Logout from Omningage Dashboard
  As a logged-in user,
  I want to log out of the Omningage application
  So that I can securely exit my session

  Background:
    Given I open the Omningage application
    And I click on the login button
    When I log in to Okta with username "xyz.com" and password "pass"
    Then I should be logged in and see Omningage on the dashboard

  Scenario: Successful Logout
    When I tap on the logout button
    And I confirm the logout
    Then I should be redirected to the login page

  Scenario: Cancel Logout
    When I tap on the logout button
    And I tap on the cancel button
    Then I should remain on the Omningage Dashboard
