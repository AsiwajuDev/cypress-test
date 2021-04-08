context("Yandex", () => {
  describe("Vist Yandex home page", () => {
    beforeEach(() => {
      cy.visit("https://mail.yandex.com/");
      cy.viewport(1440, 900);
    });

    it("Should Page Load successfully", () => {
      cy.wait(5000);
      cy.contains("Log in").click();
      cy.get("input.Textinput-Control").first().type("kazlanre{Enter}");
      cy.get("input[name='passwd']").last().type("bLErKm9H@@VvCS8{Enter}");
      cy.wait(5000);
      cy.get("a.mail-MessageSnippet").first().click();
      cy.wait(5000);
      cy.contains("Inbox").click();
    });
  });
});
