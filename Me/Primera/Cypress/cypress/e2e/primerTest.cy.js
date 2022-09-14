///<reference types="cypress"/>
describe('Primer Test', () => {
    let numero;
    it("First Test With Mocha", () => {
        numero = Math.floor(Math.random() * 1000)
        cy.visit("pushing-front.vercel.app");
        cy.get('#user').type("PushingIT2");
        cy.get('#user').clear();
        cy.get('#user').type(`PushingIT2${numero}`);
        cy.get('#pass').type("123456!");
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select("31");
        cy.get('#month').select("1");
        cy.get('#year').select(10);
        cy.get('#submitForm').click();
    });
});