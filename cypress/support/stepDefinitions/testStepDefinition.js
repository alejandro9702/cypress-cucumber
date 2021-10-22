
const {Given, When, Then} = require("cypress-cucumber-preprocessor/steps");

Given('the user trying to login to quotes portal with the user {string} and password {string}', function(email,password) {
    cy.visit(Cypress.env('url'));
    cy.loginAsAdmin(email,password);
});