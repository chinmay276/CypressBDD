import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignIn from "../Page/SignInPage.js";

let signin = new SignIn()

When('User enters email id {string}', (userEmail) => {

    signin.SignInEmail(userEmail)

})
When('User enters password {string}', (Password) => {

    signin.SignInPassword(Password)

})

When('User clicks on Sign In', () => {

    signin.SignIn()

})
Then('Verify if user is sign In',()=>
{
    signin.VerifySignIN()
})