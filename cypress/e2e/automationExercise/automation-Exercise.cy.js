/// <reference types="cypress" />

describe('1. Register User', () => {

    beforeEach(() => {
        cy.visit("http://automationexercise.com");
    });
    it('Verify that home page is visible successfully', () => {
        cy.get('body').should('be.visible');
    });
    it('Click on "Signup/Login" button', () => {
        cy.get('.fa-lock').trigger('mouseover').click();
        cy.contains('.signup-form', 'New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Brokolis3',);
        cy.get('[data-qa="signup-email"]').type('Brokolis3@testas.test.ts');
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

describe('2. Login User with correct email and password', () => {

    beforeEach(() => {
        cy.visit("http://automationexercise.com");
    });
    it('Verify that home page is visible successfully', () => {
        cy.get('body').should('be.visible');
    });
    it('Create new user', () => {
        cy.get('.fa-lock').trigger('mouseover').click();
        cy.contains('.signup-form', 'New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Brokolis2',);
        cy.get('[data-qa="signup-email"]').type('Brokolis2@testas.test.ts');
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
    })

    it('Registrate user login', () => {
        cy.get('.fa-lock').trigger('mouseover').click();
        cy.contains('.login-form', 'Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type('Brokolis2@testas.test.ts',);
        cy.get('[data-qa="login-password"]').type('testas');
        cy.get('[data-qa="login-button"]').should('be.visible').click();
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as').and('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(5) > a').contains(' Delete Account').click();
        cy.get('h2.title.text-center').should('contain', 'Account Deleted!').and('be.visible');
    })

});

describe('3. Login User with incorrect email and password', () => {

    beforeEach(() => {
        cy.visit("http://automationexercise.com");
    });
    it('Verify that home page is visible successfully', () => {
        cy.get('body').should('be.visible');
    });
    it('Click on "Signup/Login" button', () => {
        cy.get('.fa-lock').trigger('mouseover').click();
        cy.contains('.login-form', 'Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type('Neteisingi@testas.test.ts',);
        cy.get('[data-qa="login-password"]').type('neteisingi');
        cy.get('[data-qa="login-button"]').should('be.visible').click();
        cy.contains('p', 'Your email or password is incorrect!').should('be.visible');

    })

});

describe('4. Logout User', () => {

    beforeEach(() => {
        cy.visit("http://automationexercise.com");
    });
    it('Verify that home page is visible successfully', () => {
        cy.get('body').should('be.visible');
    });
    it('Click on "Signup/Login" button', () => {
        cy.get('.fa-lock').trigger('mouseover').click();
        cy.contains('.login-form', 'Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type('Brokolis@testas.test.ts',);
        cy.get('[data-qa="login-password"]').type('testas');
        cy.get('[data-qa="login-button"]').should('be.visible').click();
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as').and('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('contain',' Logout').and('be.visible').click();
        cy.contains('.login-form', 'Login to your account').should('be.visible');
    })

});


describe('5. Register User with existing email', () => {

    beforeEach(() => {
        cy.visit("http://automationexercise.com");
    });
    it('Verify that home page is visible successfully', () => {
        cy.get('body').should('be.visible');
    });
    it('Click on "Signup/Login" button', () => {
        cy.get('.fa-lock').trigger('mouseover').click();
        cy.contains('.signup-form', 'New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Brokolis',);
        cy.get('[data-qa="signup-email"]').type('Brokolis@testas.test.ts');
        cy.get('[data-qa="signup-button"]').should('be.visible').click();
        cy.contains('p', 'Email Address already exist!').should('be.visible');
    })

});

describe('6. Contact Us Form', () => {

    beforeEach(() => {
        cy.visit("http://automationexercise.com");
    });
    it('Verify that home page is visible successfully', () => {
        cy.get('body').should('be.visible');
    });
    it('Click on "Signup/Login" button', () => {
        cy.get('.fa.fa-envelope').trigger('mouseover').click();
        cy.contains('h2.title.text-center', 'Get In Touch').should('be.visible');
        cy.get('[data-qa="name"]').type('Brokolis',);
        cy.get('[data-qa="email"]').type('Brokolis@testas.test.ts');
        cy.get('[data-qa="subject"]').type('Kreipinys');
        cy.get('[data-qa="message"]').type('Kreipiuosi testuodama. Kaip diena ir naktis');
        //ne iki galo atlikta, nes nėra failo įkėlimo, nežinau kaip padaryti, reikės pagalbos.
        cy.get('[data-qa="submit-button"]').click();
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Press OK to proceed!'); // Patikrina tekstą
            return true; // Spaudžia "OK"
        });
        cy.contains('.status.alert.alert-success', 'Success! Your details have been submitted successfully.').should('be.visible');
        cy.get('.fa.fa-home').trigger('mouseover').click();

    })

}); 

describe('7. Verify Test Cases Page', () => {

    beforeEach(() => {
        cy.visit("http://automationexercise.com");
    });
    it('Verify that home page is visible successfully', () => {
        cy.get('body').should('be.visible');
    });
    it('Click on Test cases', () => {
        cy.get('.fa.fa-list').first().trigger('mouseover').click();
        // laukiam, kol puslapis užsikraus
        cy.url().should('include', 'test_cases'); // ar nuoroda teisinga?

        // tikriname, ar puslapio pavadinimas yra teisingas
        cy.get('.title.text-center b').should(($el) => {
            expect($el.text().trim()).to.eq('Test Cases'); // Patikrina tikslų tekstą
        });
    })

}); 