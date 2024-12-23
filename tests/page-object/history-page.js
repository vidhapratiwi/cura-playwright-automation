const { expect } = require("@playwright/test");

export class HistoryPage {

    constructor(page){
        
        this.page = page
        this.historyTitle = page.getByRole('heading', { name: 'History' })
        this.noAppointmentText = page.getByText('No appointment.')
        this.goToHomepageButton = page.getByRole('link', { name: 'Go to Homepage' })


    }

    async validateHistoryPage(){
        await expect(this.historyTitle).toBeVisible()
        await expect(this.noAppointmentText).toBeVisible()
        await expect(this.goToHomepageButton).toBeVisible()
    }

    async clickGoToHomepageButton(){
        await this.goToHomepageButton.click()
    }

}