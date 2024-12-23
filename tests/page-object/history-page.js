const { expect } = require("@playwright/test");

export class HistoryPage {

    constructor(page){
        
        this.page = page
        this.historyTitle = page.getByRole('heading', { name: 'History' })
        this.noAppointmentText = page.getByText('No appointment.')
        this.goToHomepageButton = page.getByRole('link', { name: 'Go to Homepage' })

        this.historyPanelInfo = page.locator('.panel.panel-info');
        
        this.sidebarMenu = page.locator('[id="menu-toggle"]')
        this.sidebarLogout = page.getByRole('link', { name: 'Logout' })
        this.facilitySelected = page.getByText('Tokyo CURA Healthcare Center')


    }

    async validateHistoryPageNoAppointment(){
        await expect(this.historyTitle).toBeVisible()
        await expect(this.noAppointmentText).toBeVisible()
        await expect(this.goToHomepageButton).toBeVisible()
    }

    async clickGoToHomepageButton(){
        await this.goToHomepageButton.click()
    }

    async validateHistoryPage(){
        await expect(this.historyTitle).toBeVisible()
        await expect(this.goToHomepageButton).toBeVisible()
    }

    async validateAppointentIsRecorded(){
        await expect(this.historyPanelInfo).toBeVisible()
        await expect(this.facilitySelected).toBeVisible()
    }

    async logout(){
        await this.sidebarMenu.click()
        await this.sidebarLogout.click()
    }

}