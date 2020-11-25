it ("Should have the expected static DOM elements", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get("h1").should("have.text", "Learn English and French greetings");
    cy.get(".image").should("exist");
    cy.get("p").should("have.length", 2);
});

it ("Should return 'Bonjour!' into the french input box when 'Hello' is used as the english input", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get(".engVal").type("Hello!");
    cy.get(".engBtn").click();
    cy.get(".frnchVal").should("have.value", "Bonjour!");
});
it ("Should return 'Hello!' into the english input box when 'Bonjour!' is used as the french input", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get(".frnchVal").type("Bonjour!");
    cy.get(".frnchBtn").click();
    cy.get(".engVal").should("have.value", "Hello!");
});

it ("Should return the expected alert when an unknown english value is put into the input", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get(".engVal").type("This is not recognised!");
    cy.get(".engBtn").click();
    cy.on('window:alert',(txt)=> {
        expect(txt).to.contains("Not a valid input");
    });
});
it ("Should return the expected alert when an unknown french value is put into the input", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get(".frnchVal").type("This is not recognised!");
    cy.get(".frnchBtn").click();
    cy.on('window:alert',(txt)=> {
        expect(txt).to.contains("Not a valid input");
    });
});