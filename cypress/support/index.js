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
// Import commands.js using ES2015 syntax:
import './commands.js'
import {CommonHelper} from "../helpers/common_helper";

const baseUrl = Cypress.env('baseUrl');
const commonHelper = new CommonHelper();

beforeEach(function () {
    commonHelper.navigate(baseUrl);
    commonHelper.url_should_contain(baseUrl);
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');
