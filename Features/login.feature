Feature: Login

  Scenario: Login with locked credentials
    When User enter invalid username and password
    Then User should see error message
    Then User should see error message

  Scenario: Login with no match credentials
    Given I launch the application
    When I enter "1@2.com" in the username field
    And I enter "f-o-o" in the password field
    And I tap on the login button
    Then I should see an error message

  Scenario: Login with no user details
    Given I launch the application
    When I enter "" in the username field
    And I enter "" in the password field
    And I tap on the login button
    Then I should see an error message

  Scenario: Login with no password
    Given I launch the application
    When I enter "bob@example.com" in the username field
    And I enter "" in the password field
    And I tap on the login button
    Then I should see an error message

  Scenario: Login with standard user
     Given I launch the application
     When I enter "bob@example.com" in the username field
     And I enter "10203040" in the password field
     And I tap on the login button
     Then I Should see products page
  
 