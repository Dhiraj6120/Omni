Feature: Login to Omningage Dashboard
  As a user,
  I want to log in to the Omningage application
  So that I can access the dashboard

  Scenario: Successful Login with valid credentials
    Given I open the Omningage application
    And I click on the login button
    When I log in to Okta with username "dhiraj.gawali@oktapreview.virginmediao2.co.uk" and password "Dhiali976736#"
    Then I should be logged in and see "Omningage" on the dashboard
