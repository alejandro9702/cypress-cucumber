///<reference types="Cypress"/>

class LoginPage {
  elements = {
    emailInput: () => cy.xpath("//input[@id='loginFormEmailInput']"),
    passwordInput: () => cy.xpath("//input[@id='loginFormPasswordInput']"),
    signButton: () => cy.xpath("//button//span[text()='Login']")
  };
}

export default LoginPage
