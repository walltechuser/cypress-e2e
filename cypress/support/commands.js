// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

// Cypress.Commands.add('signUpUser', (first_name, last_name, user_name, email, password) => {
//     cy.get('#register > a').click();
//     cy.get('#register-username-modal')
//         .type(user_name).should('have.value', user_name);
//     cy.get('#register-first-modal')
//         .type(first_name).should('have.value', first_name);
//     cy.get('#register-last-modal')
//         .type(last_name).should('have.value', last_name);
//     cy.get('#register-email-modal')
//         .type(email).should('have.value', email);
//     cy.get('#register-password-modal')
//         .type(password);
//     cy.xpath('//button[@onclick="return register()"]').click();
// });

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
