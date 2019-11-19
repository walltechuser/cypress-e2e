import {Constants} from "../support/constants";

const constants = new Constants();

export class CommonHelper {

    assertCertainText(locator, text) {
        cy.get(locator).contains(text)
    }

    clickOnButton(locator) {
        cy.get(locator, {timeout: 10000}).click({force: true});
    }

    clickOnButtonXpath(locator) {
        cy.xpath(locator, {timeout: 10000}).click({force: true});
    }

    enterValueIntoField(locator, value) {
        cy.get(locator).type(value).should('have.value', value);
    }

    urlShouldContain(value) {
        cy.url().should('include', value)
    }

    interactWithCheckbox(action, value) {
        let locator = "[type='checkbox']";
        let values = value.split(", ");
        if (action === 'tick') {
            cy.get(locator).check(values);
        } else if (action === 'untick') {
            cy.get(locator).uncheck(values);
        } else {
            throw new Error('No such action "' + action + '" is applicable')
        }
        this.clickOnButton(constants.btnApply)
    }

    wait(period) {
        cy.wait(period);
    }

    goToCart() {
        this.wait(500);
        this.clickOnButton(constants.cart);
    }

    navigate(url) {
        cy.visit(url)
    }
}