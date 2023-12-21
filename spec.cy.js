describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

describe("My visit", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("contains", () => {
  it('finds the content "type"', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type");
  });

  describe("click", () => {
    it('clicks the link "type"', () => {
      cy.visit("https://example.cypress.io");

      cy.contains("type").click();
    });
  });

  describe("should", () => {
    it('clicking "type" navigates to a new url', () => {
      cy.visit("https://example.cypress.io");

      cy.contains("type").click();

      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should("include", "/commands/actions");
    });
  });

  describe("type email and check value in this row", () => {
    it("Gets, types and asserts", () => {
      cy.visit("https://example.cypress.io");

      cy.contains("type").click();

      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should("include", "/commands/actions");

      // Get an input, type into it
      cy.get(".action-email").type("fake@email.com");

      //  Verify that the value has been updated
      cy.get(".action-email").should("have.value", "fake@email.com");
    });
  });
});
