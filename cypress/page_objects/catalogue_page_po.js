import {CommonHelper} from "../helpers/common_helper";

const commonHelper = new CommonHelper();


export class CataloguePage extends CommonHelper {

    clear_btn = '.btn-danger';

    reset_filters() {
        // commonHelper.click_on_button(this.clear_btn);
        cy.get("[type='checkbox'][checked='true']").should('not.exist');

    }
}