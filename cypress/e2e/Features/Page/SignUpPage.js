const Css = require('../../../fixtures/Css.json')
import { Before } from "@badeball/cypress-cucumber-preprocessor";


class SignUp {

    constructor() {
        Before({ tags: '@user' }, () => {

            cy.fixture('SignUpData.json').then((UserData) => {
                this.FirstName = UserData.FirstName
                this.LastName = UserData.LastName
                this.Email = UserData.Email
                this.Password = UserData.Password
                this.Confirmpassword = UserData.Confirmpassword
            })

        })
    }
    visitWebApp() {
        cy.visit(Cypress.config('baseUrl'))
    }

    clickOnSignUp(elementName) {
        cy.contains(elementName).click()
    }
    enterName() {
        cy.get(Css.FirstName).type(this.FirstName)
        cy.wait(2000)
        cy.get(Css.LasttName).type(this.LastName)
        cy.wait(2000)
    }

    enterEmailPassword() {
        let uniqueEmail =this.Email.substring(0, 2) +Math.floor(Math.random() *999)
        cy.get(Css.Email).type(uniqueEmail +this.Email)
        cy.wait(2000)
        cy.get(Css.Password).type(this.Password)
        cy.wait(2000)
        cy.get(Css.Confirm_Password).type(this.Confirmpassword)
        cy.wait(2000)
    }

    clickOnSubmit() {
        cy.get(Css.ClickonSubmit).click()
        cy.wait(2000)
    }
    enterNameValidation(FirstName, LastName) {
        if (FirstName && LastName != "") {
            cy.get(Css.FirstName).type(FirstName)
            cy.wait(2000)
            cy.get(Css.LasttName).type(LastName)
        }
    }
    enterEmailPasswordsValidation(Email, Password, ConfirmPasword) {
        if (Email && Password && ConfirmPasword != "") {
            cy.get(Css.Email).type(Email)
            cy.wait(2000)
            cy.get(Css.Password).type(Password)
            cy.wait(2000)
            cy.get(Css.Confirm_Password).type(ConfirmPasword)
        }
    }
    ValidationMessage(Message) {
        cy.get('body').should('contain.text', Message)
    }
    VerifyAccountCreated() {
        cy.url().then((Url) => {
            expect(Url).eqls('https://magento.softwaretestingboard.com/customer/account/')
        })
        cy.get(Css.VerifyAccount).should('contain.text', this.FirstName)
        cy.get(Css.VerifyAccount).should('contain.text', this.LastName)
        cy.get(Css.VerifyAccount).should('contain.text', this.Email)
    }
}

export default SignUp