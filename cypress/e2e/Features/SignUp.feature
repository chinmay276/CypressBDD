Feature: Sign Up to an Account

    @user
    Scenario: Verify if User is Able to Sign Up to Account
        Given User navigates to web page
        When User clicks on "Create an Account"
        And User enter First Name and Last Name
        And User enters Email Password and ConfirmPassword
        And User clicks on Create an Account
        Then Verify if account is Created Successfully





    Scenario Outline: Verify if Field validation for Sign Up page
        Given User navigates to web page
        When User clicks on "Create an Account"
        And User enter First Name "<FirstName>" and Last Name "<Last Name>"
        And User enters Email "<Email>" Password "<Password>" and ConfirmPassword "<Confirm Password>"
        And User clicks on Create an Account
        Then Verify the Message "<Validation Message>"
        Examples:
            | FirstName | Last Name | Email              | Password     | Confirm Password | Validation Message                                                                                                 |
            | pratham   |           | test@123.gmail.com | test@123@qwe | test@123@qwe     | This is a required field.                                                                                          |
            | pratham   | Man       |                    | test@123@qwe | test@123@qwe     | This is a required field.                                                                                          |
            | pratham   | Man       | test@123.gmail.com | test@123@qwe | test@123         | Please enter the same value again.                                                                                 |
            | pratham   | Man       | test@123.gmail.com | test         | test             | Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored. |