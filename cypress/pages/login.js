const loginPage = {
  standardLoginButton: () => cy.get('[data-cy="standard-login-button"]'),
  standardFlow: {
    emailField: () => cy.get('[data-cy="email-input"]'),
    passwordField: () => cy.get('[data-cy="password-input"]'),
    loginButton: () => cy.get('[data-cy="login-button"]')
  }
}

export default loginPage;