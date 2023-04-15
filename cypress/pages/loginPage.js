class loginPage{

    elements ={
        username : () => cy.get("[name='username']"),
        selectUser : () => cy.get("[name='password']"),
        loginBtn : () => cy.get("[data-id='login']")
    }

    login(){
        this.elements.username().type("d.alzate");
        this.elements.selectUser().type("Qwerty123");
        this.elements.loginBtn().click();
    }
}

module.exports = new loginPage();