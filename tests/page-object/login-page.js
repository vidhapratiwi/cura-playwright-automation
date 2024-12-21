const { expect } = require("@playwright/test");

export class LoginPage {

    constructor(page) {
        this.page = page
        this.loginTitle = page.getByRole('heading', { name: 'Login' })
        this.usernameTextbox = page.getByLabel('Username')
        this.passwordTextbox = page.getByLabel('Password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.errorMessage = page.getByText('Login failed! Please ensure')
    }

    async validateLoginPage(){
        await expect(this.loginTitle).toBeVisible()
    }

    async inputUsername(username){
        await this.usernameTextbox.fill(username)
    }

    async inputPassword(password){
        await this.passwordTextbox.fill(password)
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }

    async showErrorMessage(){
        await expect(this.errorMessage).toBeVisible()
    }

    async login(username, password){
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.clickLoginButton()
    }

}