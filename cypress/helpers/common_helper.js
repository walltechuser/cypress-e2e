import {Constants} from "../support/constants";

const constants = new Constants();

export class CommonHelper {

    assert_certain_text(locator, text) {
        cy.get(locator).contains(text)
    }

    click_on_button(locator) {
        cy.get(locator, {timeout: 10000}).click({force: true});
    }

    enter_value_into_field(locator, value) {
        cy.get(locator)
            .type(value).should('have.value', value);
    }

    url_should_contain(value) {
        cy.url().should('include', value)
    }

    interact_with_checkbox(action, value) {
        let locator = "[type='checkbox']";
        let values = value.split(", ");
        if (action === 'tick') {
            cy.get(locator).check(values);
        } else if (action === 'untick') {
            cy.get(locator).uncheck(values);
        } else {
            throw new Error('No such action "' + action + '" is applicable')
        }
        this.click_on_button(constants.apply_btn)
    }

    wait(period) {
        cy.wait(period);
    }

    go_to_cart() {
        this.wait(500);
        this.click_on_button(constants.cart);
    }
}