import {CommonHelper} from "../helpers/common_helper";

const commonHelper = new CommonHelper();

export class LandingPage extends CommonHelper {
    header_block = '.menu';
    body_block = '.navbar.navbar-default';
    register_btn = '#register > a';
    user_name_txt = '#register-username-modal';
    first_name_txt = '#register-first-modal';
    last_name_txt = '#register-last-modal';
    email_txt = '#register-email-modal';
    password_txt = '#register-password-modal';
    catalogue_btn = '.dropdown-toggle';
    register_user_btn = '//button[@onclick="return register()"]';

    navigate(url) {
        cy.visit(url)
    }

    register_user() {
        cy.xpath(this.register_user_btn).click({force: true});
    }
}