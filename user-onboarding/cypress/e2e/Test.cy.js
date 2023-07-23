describe("Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Types name in names input", () => {
    cy.get('input[name="fName"]')
      .type("Osmosis")
      .should("have.value", "Osmosis");
    cy.get('input[name="lName"]').type("Jones").should("have.value", "Jones");
  });

  it("Types email in email input", () => {
    cy.get('input[name="email"]').type("ojones@cytology.com");
  });

  it("Types password in password input", () => {
    cy.get('input[name="password"]').type("password");
  });

  it("Types password in password input", () => {
    cy.get('input[name="confirmPassword"]').type("password");
  });

  it("Can Select Back-End Developer", () => {
    cy.get("select[name='role']")
      .select("Back-End Developer")
      .trigger("change")
      .should("have.value", "Back-End Developer");
  });

  it("Check box works", () => {
    cy.get('input[name="terms"]').click().should("be.checked");
  });

  it("Submit button works and info is displayed", () => {
    cy.get('input[name="fName"]')
      .type("Osmosis")
      .should("have.value", "Osmosis");
    cy.get('input[name="lName"]').type("Jones").should("have.value", "Jones");
    cy.get('input[name="email"]').type("ojones@cytology.com");
    cy.get('input[name="password"]').type("password");
    cy.get('input[name="confirmPassword"]').type("password");
    cy.get("select[name='role']")
      .select("Back-End Developer")
      .trigger("change")
      .should("have.value", "Back-End Developer");
    cy.get('input[name="terms"]')
      .click()
      .should("be.checked")
      .trigger("change");
    cy.get("[data-cy='submit']").should("not.be.be.disabled").click();
    cy.get("div[data-cy='info']").should("exist");
  });
});
