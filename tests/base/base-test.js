const { test:base } = require("@playwright/test")
const { HomePage } = require("../page-object/home-page")
const { LoginPage } = require("../page-object/login-page")
const { AppointmentPage } = require("../page-object/appointment-page")
const { HistoryPage } = require("../page-object/history-page")
const { ProfilePage } = require("../page-object/profile-page")

export const test = base.extend({

    homePage : async({page}, use) => {
        const homePage = new HomePage(page)

        await homePage.navigate()
        await use(homePage)
    },

    loginPage : async ({page}, use) => {
        await use(new LoginPage(page))
    },

    appointmentPage : async ({page}, use) => {
        await use(new AppointmentPage(page))
    },

    historyPage : async ({page}, use) => {
        await use(new HistoryPage(page))
    },

    profilePage : async ({page}, use) => {
        await use(new ProfilePage(page))
    },



})