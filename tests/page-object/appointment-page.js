const { expect } = require("@playwright/test");

export class AppointmentPage {

    constructor(page) {
        this.page = page
        this.appointmentTitle = page.getByRole('heading', { name: 'Make Appointment' })
    }

    async validateAppointmentPage(){
        await expect(this.appointmentTitle).toBeVisible()
    }

}