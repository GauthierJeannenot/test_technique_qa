export class LoginPage {
  private usernameInput = 'input[data-test="username"]'
  private passwordInput = 'input[data-test="password"]'
  private submitButton = 'input[data-test="login-button"]'

  visit() {
    cy.visit("/")
    return this
  }

  fillUsername(username: string) {
    cy.get(this.usernameInput).clear().type(username)
    return this
  }

  fillPassword(password: string) {
    cy.get(this.passwordInput).clear().type(password)
    return this
  }

  submit() {
    cy.get(this.submitButton).click()
    return this
  }
}