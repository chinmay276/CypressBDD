import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignUp from "../Page/SignUpPage.js";

let signUp = new SignUp()

Given('User navigates to web page', () => {

    signUp.visitWebApp()
})
When('User clicks on {string}', (elementName) => {

    signUp.clickOnSignUp(elementName)

})
When('User enter First Name and Last Name', () => {

    signUp.enterName()
})
When('User enters Email Password and ConfirmPassword', () => {

    signUp.enterEmailPassword()
})
When('User clicks on Create an Account', () => {

    signUp.clickOnSubmit()
})
Then('Verify if account is Created Successfully', () => {

    signUp.VerifyAccountCreated()
})
When('User enter First Name {string} and Last Name {string}', (FirstName, LastName) => {

    signUp.enterNameValidation(FirstName, LastName)
})
When('User enters Email {string} Password {string} and ConfirmPassword {string}', (Email, Password, ConfirmPassword) => {

    signUp.enterEmailPasswordsValidation(Email, Password, ConfirmPassword)
})
Then('Verify the Message {string}', (ValidationMessage) => {
    signUp.ValidationMessage(ValidationMessage)
})
