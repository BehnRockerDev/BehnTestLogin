Feature: Test Site Login

  Scenario: As a user, I can log into the website
    Given I am on the login page
    When I login with correct credentials
    Then I am redirected to the home page
      And I see a confirmation message

  Scenario: As a user, I cannot log in with invalid credentials
    Given I am on the login page
    When I login with incorrect credentials
    Then I see an authentication error message

  Scenario: As a user, I am able to reset the login form
    Given I am on the login page
    When I login with incorrect credentials
      And I click the reset button
    Then The form is reset to default
      And The authentication error message disappears

  Scenario: As a user, I can complete the login flow using toolbar navigation
    Given I am on the home page
    When I navigate to the login page via the toolbar
      And I login with correct credentials
    Then I am redirected to the home page
      And I see a confirmation message

  Scenario: As a user, I can complete the login flow using side bar navigation
    Given I am on the home page
    When I navigate to the login page via the sidebar
      And I login with correct credentials
    Then I am redirected to the home page
    And I see a confirmation message

  Scenario Outline: As a user, the homepage displays a message which varies based on my logged in status
    Given I am on the login page
    When I login with <username> and <password>
      And I open the home page
    Then I should see a message saying <message>
    Examples:
      | username | password    | message                                  |
      | testuser | password123 | You are logged in! Welcome, Testy McUser |
      | baduser  | badpassword | You are not logged in                    |

  Scenario: As a user, if I open a non-existent page, I am shown an error
    Given I am on the home page
    When I open a page that doesn't exist
    Then I should be shown an error message