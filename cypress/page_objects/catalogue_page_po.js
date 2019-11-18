import {CommonHelper} from "../helpers/common_helper";

const commonHelper = new CommonHelper();

export class CataloguePage extends CommonHelper {

    clear_btn = '.btn-danger';

    reset_filters() {
        commonHelper.click_on_button(this.clear_btn);
        commonHelper.wait(500);
        cy.get('[id="filters"]', {timeout: 10000}).should('exist');
        cy.get("[type='checkbox'][checked='true']").should('not.exist');
    }

    add_product_to_cart(name) {
        let locator = '//*[contains(text(),' + '"' + name + '"' + ')]/parent::*/following-sibling::*[2]/*[@class="btn btn-primary"]';
        cy.xpath(locator).click({force: true});
    }

    cart_contains_product(name) {
        let container = '#numItemsInCart+.table-responsive';
        // cy.get(container).invoke('text').should('contain', name)
        cy.get(container).should('contain', name);
    }
}