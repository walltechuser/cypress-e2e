import Chance from 'chance';
import {LandingPage} from "../page_objects/landing_page_po";
import {CataloguePage} from "../page_objects/catalogue_page_po";
import {CommonHelper} from "../helpers/common_helper";
import {Constants} from "../support/constants";

const chance = new Chance();
const landingPage = new LandingPage();
const cataloguePage = new CataloguePage();
const commonHelper = new CommonHelper();
const constants = new Constants();

describe('Navigate through Landing Page', function () {
    const nameFirst = chance.first();
    const nameLast = chance.last();
    const nameUser = nameFirst + ' ' + nameLast;
    const email = chance.email();
    const password = Cypress.env('password');

    beforeEach(function () {
        // remain for future implementation to run scenario before each "it" within "describe"
    });

    it('Check Landing Page for all existent elements', function () {
        commonHelper.assertCertainText(landingPage.bodyBlock, constants.home);
        commonHelper.assertCertainText(landingPage.bodyBlock, constants.catalogue);
        commonHelper.assertCertainText(landingPage.headerBlock, constants.register);
        commonHelper.assertCertainText(landingPage.headerBlock, constants.login);
    });

    it('Register a new user', function () {
        commonHelper.clickOnButton(landingPage.btnRegister);
        landingPage.enterValueIntoField(landingPage.txtUserName, nameUser);
        landingPage.enterValueIntoField(landingPage.txtFirstName, nameFirst);
        landingPage.enterValueIntoField(landingPage.txtLastName, nameLast);
        landingPage.enterValueIntoField(landingPage.txtEmail, email);
        landingPage.enterValueIntoField(landingPage.txtPassword, password);
        landingPage.registerUser();
    });

    it('Add product to the "cart"', function () {
        commonHelper.clickOnButton(landingPage.btnCatalogue);
        commonHelper.interactWithCheckbox(constants.tick, 'red, brown');
        commonHelper.interactWithCheckbox(constants.untick, 'brown');
        cataloguePage.filtersReset();
        commonHelper.interactWithCheckbox(constants.tick, 'red');
        cataloguePage.addProductToCart('Crossed');
        commonHelper.goToCart();
        cataloguePage.cartContainsProduct('Crossed');
    });
});