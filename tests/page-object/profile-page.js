const { expect } = require("@playwright/test");

export class ProfilePage {

    constructor(page){
        this.page = page
        this.profileTitle = page.getByRole('heading', { name: 'Profile' })
        this.profileText = page.getByText('Under construction.')
        this.logoutButton = page.locator('#profile').getByRole('link', { name: 'Logout' })
    }

    async validateProfilePage(){
        await expect(this.profileTitle).toBeVisible()
        await expect(this.profileText).toBeVisible()
        await expect(this.logoutButton).toBeVisible()
    }

    async clickLogoutButton(){
        await this.logoutButton.click()
    }

}
