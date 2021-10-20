
const {Given, When, Then} = require("cypress-cucumber-preprocessor/steps");

Given('Start to type your Given step here', function(){
    cy.visit("https://quote-qa.edgelogistics.com/main/quotes");
    cy.get("#dd").type("hola");
    

});