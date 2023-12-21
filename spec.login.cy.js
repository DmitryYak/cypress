{
  /* <reference types="cypress" />; */
}

describe("template spec", () => {
  it("user can add", () => {
    cy.visit("https://example.cypress.io/todo");
    const message = "i want to learn";
    cy.get('[data-test="new-todo"]');
  });

  it("https://ru");
});
