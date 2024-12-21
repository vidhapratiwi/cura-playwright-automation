const { expect } = require("@playwright/test");

export class HomePage {

    constructor(page) {
        this.page = page
        this.homeTitle = page.getByText('CURA Healthcare Service We')
        this.appointmentButton = page.getByRole('link', { name: 'Make Appointment' })
        this.sidebarMenu = page.locator('[id="menu-toggle"]')
        this.sidebarLogin = page.getByRole('link', { name: 'Login' })
    }

    async navigate(){
        await this.page.goto('https://katalon-demo-cura.herokuapp.com/')
    }

    async validateHomePage(){
        await expect(this.Test).toBeVisible()
    }

    async clickAppointmentButton(){
        await this.appointmentButton.click()
    }

    async clickSidebarMenu(){
        await this.sidebarMenu.click()
    }

    async clickSideBarLogin(){
        await this.sidebarLogin.click()
    }


}