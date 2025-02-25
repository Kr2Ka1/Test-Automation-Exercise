/// <reference types="cypress" />

describe('Register User', () => {

    beforeEach(() => {
        cy.visit("http://automationexercise.com");
    });
    it('Verify that home page is visible successfully', () => {
        cy.get('body').should('be.visible');
    });
    it('Click on "Signup/Login" button', () => {
        cy.get('.fa-lock').trigger('mouseover').click();
        cy.contains('.signup-form', 'New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Brokolis7',);
        cy.get('[data-qa="signup-email"]').type('Brokolis7@testas.test.ts');
        cy.get('[data-qa="signup-button"]').should('be.visible').click({ timeout: 3000 });
        cy.contains('h2.title.text-center', 'Enter Account Information').should('be.visible');
        cy.get('#id_gender2').click();
        cy.get('#password').type('testas');
        cy.get('#days').select('30'); 
        cy.get('#months').select('December'); 
        cy.get('#years').select('1991');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('#first_name').type('Zalias');
        cy.get('#last_name').type('Brokolis');
        cy.get('#company').type('Medis');
        cy.get('#address1').type('Adresas naujas 8 Medis');
        cy.get('#address2').type('Manoadresas zalias 10 Senis');
        cy.get('#country').select('Canada');
        cy.get('#state').type('New');
        cy.get('#city').type('test');
        cy.get('#zipcode').type('2145632');
        cy.get('#mobile_number').type('2563259658962');
        cy.get('[data-qa="create-account"]').click();
        cy.get('h2.title.text-center').should("contain", 'Account Created!').and('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as').and('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(5) > a').contains(' Delete Account').click();
        cy.get('h2.title.text-center').should('contain', 'Account Deleted!').and('be.visible');
    })



});
