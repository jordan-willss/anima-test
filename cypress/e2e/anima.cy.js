/// <reference types="cypress" />

import HIDDEN_PASSWORD from "../../hidden";
import guidedTourPage from "../pages/guidedTour";
import loginPage from "../pages/login";
import navigationBar from "../pages/navigation";

describe('Anima demo', () => {
  beforeEach(() => {
    cy.intercept("**/help-circle.svg").as("helpCircle");
    // Add Anima URL here
    cy.visit('');
    loginPage.standardLoginButton().click();
    loginPage.standardFlow.emailField().type("jordanewills@gmail.com");
    loginPage.standardFlow.passwordField().type(HIDDEN_PASSWORD);
    loginPage.standardFlow.loginButton().click();
    cy.url().should("contain", "/home");
    guidedTourPage.exitTourButton().click();

    // Quick and dirty
    cy.wait("@helpCircle");
    cy.wait(1000);
  })

  it('User can add dependant', () => {
    navigationBar.pageList.getByIndex(2).click();
    // Breaks here, need dev, or to use a different framework
  })
})