describe("Login Test - internet.herokuapp.com", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("should login with valid credentials", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();
    cy.get(".flash.success").should(
      "contain",
      "You logged into a secure area!",
    );
  });

  it("should fail login with invalid credentials", () => {
    cy.get("#username").type("invalid");
    cy.get("#password").type("invalid");
    cy.get('button[type="submit"]').click();
    cy.get(".flash.error").should("contain", "Your username is invalid!");
  });
});
