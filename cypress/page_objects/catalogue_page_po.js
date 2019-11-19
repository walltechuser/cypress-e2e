import {CommonHelper} from "../helpers/common_helper";

const commonHelper = new CommonHelper();

export class CataloguePage extends CommonHelper {

    btnClear = '.btn-danger';

    filtersReset() {
        commonHelper.clickOnButton(this.btnClear);
        commonHelper.wait(500);
        cy.get('[id="filters"]', {timeout: 10000}).should('exist');
        cy.get("[type='checkbox'][checked='true']").should('not.exist');
    }

    addProductToCart(name) {
        let locator = '//*[contains(text(),' + '"' + name + '"' + ')]/parent::*/following-sibling::*[2]/*[@class="btn btn-primary"]';
        cy.xpath(locator).click({force: true});
    }

    cartContainsProduct(name) {
        let container = '#numItemsInCart+.table-responsive';
        // cy.get(container).invoke('text').should('contain', name)
        cy.get(container).should('contain', name);
    }
}