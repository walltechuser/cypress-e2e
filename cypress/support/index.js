// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import {LandingPage} from "../page_objects/landing_page_po";
// Import commands.js using ES2015 syntax:
import './commands.js'

const baseUrl = Cypress.env('baseUrl');
const landingPage = new LandingPage();

beforeEach(function () {
    landingPage.navigate(baseUrl);
    landingPage.url_should_contain(baseUrl);
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');
