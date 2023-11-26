import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";
import  calculator  from "../Page/calcpage";
import APIs from '../Utlity/ApiUtlity'
let calc = new calculator()
let Postrequest = new APIs()
Given('User Navigates to Webpage',()=>
{
  //cy.visit('https://calculator.net')
  calc.visitWebpage()
})

When('User Clicks on {string}',(number1)=>
{
  cy.get('[onclick="r('+number1+')"]').click()
})
When('User Clicks on +',()=>
{
  cy.get(`[onclick="r('+')"]`).click()
})
When('User Clicks on 2',()=>
{
  cy.get('[onclick="r(2)"]').click()
})
Then('User Verifys Sum is {string}',(assertionValue)=>
{
  cy.get('#sciOutPut').should('contain.text',assertionValue)
})

Given('User Calls {string} to {string} with Body',(Call,Endpoint,requestBody)=>
{
  Postrequest.postRequest(Call,Endpoint,requestBody)
})


Then('User Verifies Status {string}',(Status)=>
{
  Postrequest.Assertresponse(Status)
})
Then('User Verifies Response Body',(responseBody)=>
{

})