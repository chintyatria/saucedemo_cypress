describe('Sauce Demo Test Login', () => {
  it('Failed Login', () => {
    cy.visit('');
    cy.get('#user-name').type('standart_user')
    cy.get('[placeholder="Password"]').type("salahpassw")
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should(
      "contain",
      "Username and password do not match any user in this service"
    );
  })
  it("Failed Login - Locked User", () => {
    cy.visit('');
    cy.get("#user-name").type("locked_out_user");
    cy.get('[placeholder="Password"]').type("secret_sauce");
    cy.get(".submit-button.btn_action").click();
    cy.get('[data-test="error"]').should(
      "contain",
      "Sorry, this user has been locked out."
    );
  });
  it("Success Login", () => {
    cy.visit('');
    cy.get("#user-name").type("standart_user")
    cy.get('[placeholder="Password"]').type("secret_sauce")
    cy.get(".submit-button.btn_action").click()
    cy.url().should("contain", "/cart.html")
    //cy.get('.title').should('be.visible')
  });
})