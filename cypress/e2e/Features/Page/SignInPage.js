const Css = require('../../../fixtures/Css.json')
import { Before } from "@badeball/cypress-cucumber-preprocessor";


class SignIn {
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
    SignInEmail(Email) {
        cy.get(Css.SignInEmail).type(Email)
        this.Email = Email
    }
    SignInPassword(Password) {
        cy.get(Css.SignInPassword).type(Password)
        this.Password = Password
    }
    SignIn() {
        cy.get(Css.SignInButton).eq(0).click()
    }
    VerifySignIN() {

        cy.get(Css.VerifySign).should('contain.text',this.FirstName)
        cy.get(Css.VerifySign).should('contain.text',this.LastName)
    }

}

export default SignIn