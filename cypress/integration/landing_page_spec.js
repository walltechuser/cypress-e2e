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
    const first_name = chance.first();
    const last_name = chance.last();
    const user_name = first_name + ' ' + last_name;
    const email = chance.email();
    const password = Cypress.env('password');

    beforeEach(function () {
        // remain for future implementation to run scenario before each "it" within "describe"
    });

    it('Check Landing Page for all existent elements', function () {
        commonHelper.assert_certain_text(landingPage.body_block, constants.home);
        commonHelper.assert_certain_text(landingPage.body_block, constants.catalogue);
        commonHelper.assert_certain_text(landingPage.header_block, constants.register);
        commonHelper.assert_certain_text(landingPage.header_block, constants.login);
    });

    it('Register a new user', function () {
        commonHelper.click_on_button(landingPage.register_btn);
        landingPage.enter_value_into_field(landingPage.user_name_txt, user_name);
        landingPage.enter_value_into_field(landingPage.first_name_txt, first_name);
        landingPage.enter_value_into_field(landingPage.last_name_txt, last_name);
        landingPage.enter_value_into_field(landingPage.email_txt, email);
        landingPage.enter_value_into_field(landingPage.password_txt, password);
        landingPage.register_user();
    });

    it('Add product to the "cart"', function () {
        commonHelper.click_on_button(landingPage.catalogue_btn);
        commonHelper.interact_with_checkbox(constants.tick, 'red, brown');
        commonHelper.interact_with_checkbox(constants.untick, 'brown');
        cataloguePage.reset_filters();
        commonHelper.interact_with_checkbox(constants.tick, 'red');
        cataloguePage.add_product_to_cart('Crossed');
        commonHelper.go_to_cart();
        cataloguePage.cart_contains_product('Crossed');
    });
});