Feature: Verify if User is able to Sign In in Application

    @user
    Scenario: Verify if User is able to Sign In
        Given User navigates to web page
        When User clicks on "Sign In"
        And User enters email id "a.894a.a@gmail.com"
        And User enters password "test@20211212S"
        And User clicks on Sign In
        Then Verify if user is sign In





