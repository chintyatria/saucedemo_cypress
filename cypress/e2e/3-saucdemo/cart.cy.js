describe("Sauce Demo Test Cart", () => {
  beforeEach(() => {
    cy.visit('');
    cy.get("#user-name").type("standart_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get(".submit-button.btn_action").click();
    cy.url().should("contain", "/cart.html");
    //cy.get('.title').should('be.visible');
  });
  it("Success Add To Cart", () => {
    cy.get('.add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_link').should('have.text', '1');
    cy.get('shopping_cart_link').click();
    cy.url().should("contain", "/cart.html");
    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack');
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get(".shopping_cart_link").should("have.text", "0");
    cy.get('[data-test="continue-shopping"]').click();
    cy.url().should('contain', '/inventory.html')

  });
});
