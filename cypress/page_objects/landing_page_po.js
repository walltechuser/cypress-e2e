import {CommonHelper} from "../helpers/common_helper";

const commonHelper = new CommonHelper();

export class LandingPage extends CommonHelper {
    headerBlock = '.menu';
    bodyBlock = '.navbar.navbar-default';
    btnRegister = '#register > a';
    btnCatalogue = '.dropdown-toggle';
    btnRegisterUser = '//button[@onclick="return register()"]';
    txtUserName = '#register-username-modal';
    txtFirstName = '#register-first-modal';
    txtLastName = '#register-last-modal';
    txtEmail = '#register-email-modal';
    txtPassword = '#register-password-modal';

    registerUser() {
        commonHelper.clickOnButtonXpath(this.btnRegisterUser)
    }
}