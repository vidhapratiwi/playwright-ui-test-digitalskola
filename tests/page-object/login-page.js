import { expect } from "@playwright/test"

export class LoginPage {

    //keywords: oop, class method, class constructor
    constructor(page) {
        this.page = page

        this.usernameTextBox = page.getByPlaceholder('Username')
        this.passwordTextBox = page.getByPlaceholder('Password')
        this.loginButton = page.getByText('Login')
    }

    async navigate() {
        await this.page.goto("https://www.saucedemo.com/")
        //visual comparison
        await expect(this.page).toHaveScreenshot('login-page.png')

    }

    async inputUsername(username) {
        await this.usernameTextBox.fill(username)
    }

    async inputPassword(password) {
        await this.passwordTextBox.fill(password)
    }

    async clickLoginButton() {
        await this.loginButton.click()
    }

    async login(username, password) {
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.clickLoginButton()
    }

}