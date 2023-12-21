describe("Log in", function () {
  it("Sing in", function () {
    cy.visit("https://unsplash.com/");
    cy.get(".cLLOA").click();
    cy.get("#user_email").type("yak@gmail.com");
    cy.get("#user_password").type("1234");
    cy.get(":nth-child(7) > .btn").click();
  });
});
