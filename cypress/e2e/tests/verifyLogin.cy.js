import loginPage from "../../pages/loginPage"

it('Should login to inventory page', () =>{
    cy.visit('https://development.fluidconfigure.com/admin')
    loginPage.login();
    
})