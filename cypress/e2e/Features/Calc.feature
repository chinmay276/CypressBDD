Feature: Calcuation of two number

    # Scenario: Addtion of 2 number
    #     Given User Navigates to Webpage
    #     When User Clicks on 4
    #     And User Clicks on +
    #     And User Clicks on 9
    #     Then User Verifys Sum is 3


    @smoke
    Scenario: Addtion of 2 number
        Given User Navigates to Webpage
        When User Clicks on "1"
        And User Clicks on +
        And User Clicks on "2"
        Then User Verifys Sum is "4"


    @UAT
    Scenario: Addtion of 2 number
        Given User Navigates to Webpage
        When User Clicks on "1"
        And User Clicks on +
        And User Clicks on "2"
        Then User Verifys Sum is "4"

# Scenario: Addtion of 2 number
#     Given User Navigates to Webpage "https://calculator.net"
#     When User Clicks on "3"
#     And User Clicks on +
#     And User Clicks on "3"
#     Then User Verifys Sum is "6"


# Scenario Outline: Addtion of 2 number
#     Given User Navigates to Webpage "https://calculator.net"
#     When User Clicks on "<Number1>"
#     And User Clicks on +
#     And User Clicks on "<Number2>"
#     Then User Verifys Sum is "<Results>"
#     Examples:
#         | Number1 | Number2 | Results |
#         | 3       | 3       | 6       |
#         | 1       | 2       | 3       |
#         | 5       | 6       | 50      |




# Scenario Outline: Addtion of 2 number

#     Given User Calls "<method>" to "<URL>" with Body
#     ```
#     {
#     "name": "morpheus",
#     "job": "leader"
#     }
#     ```
#     Then User Verifies Status "<StatusCode>"
#     Examples:
#         | method | URL                           | StatusCode |
#         | POST   | https://reqres.in/api/users   | 201        |
#         | PUT    | https://reqres.in/api/users/2 | 200        |



#   And User Verifies Response Body

#   ```
#  "name": "morpheus",
#  "job": "leader",
#   ```

