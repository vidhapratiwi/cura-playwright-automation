const { expect } = require("@playwright/test");

export class HomePage {

    constructor(page) {
        this.page = page
        this.Test = page.getByText('CURA Healthcare Service We')
    }

    async navigate(){
        await this.page.goto('https://katalon-demo-cura.herokuapp.com/')
    }

    async testing(){
        await expect(this.Test).toBeVisible()
    }


}