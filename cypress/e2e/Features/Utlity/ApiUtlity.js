globalThis.response = null
class APIs

{

  postRequest(Call,Endpoint,requestBody)
  {
    cy.request({method:Call,url:Endpoint,body:JSON.parse(requestBody)}).then((response)=>
    {
       cy.log(response.status)
       globalThis.response = response.status
    })
  }

  Assertresponse(statusCode)
  {
       expect(parseInt(statusCode)).to.eqls(parseInt(globalThis.response))
  }
}

export default APIs