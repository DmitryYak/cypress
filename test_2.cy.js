describe("lusia", () => {
  it("by", () => {
    cy.visit("https://dev.xn--24-glcu3bgn9f.xn--p1ai/login");
    cy.title().should("include", "ЮгРуси");
    cy.get('[aria-label="ИНН или email"]').type("7802261666");
    cy.get('[aria-label="Пароль"]').type("1234");
    cy.get(".q-btn--standard").click();
    cy.get(".reminder__list-item--active").click();
    cy.contains("Контакты и реквизиты").click();
    cy.get(
      ":nth-child(2) > .q-expansion-item__container > .q-item > .q-item__section > .q-icon"
    ).scrollIntoView();
    cy.get(".custom-input.is-value.phone-block__input").type("8917234");

    // cy.get(".phone-block__wrapper > .input").type("1234");
    // cy.get(
    //   ".phone-block__wrapper > .custom-input > .custom-input__block > .input"
    // )
    //   .contains("+ 7")
    //   .type("1234");
    // cy.contains("submit").cklick();
    // cy.get("[class='phone-block__wrapper'] > .input").type("1234");
  });
});
