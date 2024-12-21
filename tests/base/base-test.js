const { test:base } = require("@playwright/test")
const { HomePage } = require("../page-object/home-page")

export const test = base.extend({

    homePage: async({page}, use) => {
        const homePage = new HomePage(page)

        await homePage.navigate()
        await use(homePage)
    }

})