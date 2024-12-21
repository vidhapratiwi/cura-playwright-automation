const { expect } = require("@playwright/test");
const { test } = require("./base/base-test");


test('TC 01 - Successfully Login', async ({ homePage, loginPage, appointmentPage }) => {
    await homePage.clickAppointmentButton()

    await loginPage.validateLoginPage()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await appointmentPage.validateAppointmentPage()
});

test('TC 02 - Successfully Login - Sidebar Menu', async ({ homePage, loginPage, appointmentPage }) => {
    await homePage.clickSidebarMenu()
    await homePage.clickSideBarLogin()

    await loginPage.validateLoginPage()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await appointmentPage.validateAppointmentPage()
});

test('TC 03 - Failed login with invalid username', async ({ homePage, loginPage }) => {
    await homePage.clickSidebarMenu()
    await homePage.clickSideBarLogin()

    await loginPage.validateLoginPage()
    await loginPage.login(process.env.INVALID, process.env.DEMO_PASS)
    await loginPage.showErrorMessage()
});

test('TC 04 - Failed login with invalid password', async ({ homePage, loginPage }) => {
    await homePage.clickSidebarMenu()
    await homePage.clickSideBarLogin()

    await loginPage.validateLoginPage()
    await loginPage.login(process.env.DEMO_USER, process.env.INVALID)
    await loginPage.showErrorMessage()
});

test('TC 05 - Failed login with empty username', async ({ homePage, loginPage }) => {
    await homePage.clickSidebarMenu()
    await homePage.clickSideBarLogin()

    await loginPage.validateLoginPage()
    await loginPage.login(process.env.EMPTY, process.env.DEMO_PASS)
    await loginPage.showErrorMessage()
});

test('TC 06 - Failed login with empty password', async ({ homePage, loginPage }) => {
    await homePage.clickSidebarMenu()
    await homePage.clickSideBarLogin()

    await loginPage.validateLoginPage()
    await loginPage.login(process.env.DEMO_USER, process.env.EMPTY)
    await loginPage.showErrorMessage()
});

test('TC 07 - Failed login with empty credentials', async ({ homePage, loginPage }) => {
    await homePage.clickSidebarMenu()
    await homePage.clickSideBarLogin()

    await loginPage.validateLoginPage()
    await loginPage.login(process.env.EMPTY, process.env.EMPTY)
    await loginPage.showErrorMessage()
});

test('TC 08 - Successful login with username case sensitivity (uppercase)', async ({ homePage, loginPage }) => {
    await homePage.clickSidebarMenu()
    await homePage.clickSideBarLogin()

    await loginPage.validateLoginPage()
    await loginPage.login(process.env.USER_UPPER, process.env.DEMO_PASS)
    
    await appointmentPage.validateAppointmentPage()
});

test('TC 08 - Successful login with username case sensitivity (lowercase)', async ({ homePage, loginPage }) => {
    await homePage.clickSidebarMenu()
    await homePage.clickSideBarLogin()

    await loginPage.validateLoginPage()
    await loginPage.login(process.env.USER_LOWER, process.env.DEMO_PASS)
    
    await appointmentPage.validateAppointmentPage()
});

test('TC 09 - Failed login with password case sensitivity (uppercase)', async ({ homePage, loginPage }) => {
    await homePage.clickSidebarMenu()
    await homePage.clickSideBarLogin()

    await loginPage.validateLoginPage()
    await loginPage.login(process.env.DEMO_USER, process.env.PASS_UPPER)
    await loginPage.showErrorMessage()
});

test('TC 09 - Failed login with password case sensitivity (lowercase)', async ({ homePage, loginPage }) => {
    await homePage.clickSidebarMenu()
    await homePage.clickSideBarLogin()

    await loginPage.validateLoginPage()
    await loginPage.login(process.env.DEMO_USER, process.env.PASS_LOWER)
    await loginPage.showErrorMessage()
});




test.beforeAll(async () => {
    console.log("setup test env")
});

test.beforeEach(async () => {
    console.log("clean up")
});

//screenshot for failed test cases
//visual comparison
test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        console.log("Test failed, perform screenshot")
        const image = await page.screenshot({path: 'failed screenshot.png', fullPage:true})
        testInfo.attach('failed test', {
            body: image,
            contentType: 'image/png',
        })
    }
});

test.afterAll(async ({ browser }) => {
    await browser.close();
})


