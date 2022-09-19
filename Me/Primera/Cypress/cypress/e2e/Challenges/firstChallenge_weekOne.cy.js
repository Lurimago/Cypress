///<reference types="cypress"/>
describe('firstChallenge - Cypress', () => {
    let number;
    it("firstChallenge - Cypress", () => {
        //Register
        number = Math.floor(Math.random() * 1000)
        cy.visit("pushing-front.vercel.app");
        cy.get('#user').type("Lurimago");
        cy.get('#user').clear();
        cy.get('#user').type(`Lurimago${number}`);
        cy.get('#pass').type("123456!");
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select("13");
        cy.get('#month').select("11");
        cy.get('#year').select(72);
        cy.get('#submitForm').click();
         //Go to Button To Do List
         cy.get('#todolistlink').click();
         //Typing Task number N and click on Send Button
         cy.get('#task').clear();
         cy.get('#task').type(`Task ${number}`);
         cy.get('#sendTask').click();
         //Click on Task created
         cy.contains(`Task ${number}`).click();
    });
});