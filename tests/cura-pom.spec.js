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

test('TC 10 - Scroll to bottom and back to top of the page', async ({ homePage }) => {
    await homePage.validateHomePage()
    await homePage.scrollToBottom()
    await homePage.scrollToTop()
});

test('TC 11 - Verify appointment button and the form', async ({ homePage, loginPage, appointmentPage }) => {
    await homePage.clickAppointmentButton()
    await loginPage.validateLoginPage()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await appointmentPage.validateAppointmentPage()
});

test('TC 12 - Verify sidebar menu - before login', async ({ homePage }) => {
    await homePage.validateHomePage()
    await homePage.clickSidebarMenu()
    await homePage.validateSidebarBeforeLogin()
    
});

test('TC 13 - Verify sidebar menu - after login', async ({ homePage, loginPage }) => {
    await homePage.clickAppointmentButton()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await homePage.clickSidebarMenu()
    await homePage.validateSidebarAfterLogin()
});

test('TC 14 - Verify sidebar menu - Home', async ({ homePage, loginPage }) => {
    await homePage.clickAppointmentButton()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await homePage.clickSidebarMenu()
    await homePage.validateSidebarAfterLogin()
    await homePage.clickSidebarHome()
    await homePage.validateHomePage()
});

test('TC 15 - Verify sidebar menu - History', async ({ homePage, loginPage, historyPage }) => {
    await homePage.clickAppointmentButton()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await homePage.clickSidebarMenu()
    await homePage.validateSidebarAfterLogin()
    await homePage.clickSidebarHistory()

    await historyPage.validateHistoryPage()
});

test('TC 16 - Verify sidebar menu - Profile', async ({ homePage, loginPage, profilePage }) => {
    await homePage.clickAppointmentButton()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await homePage.clickSidebarMenu()
    await homePage.validateSidebarAfterLogin()
    await homePage.clickSidebarProfile()

    await profilePage.validateProfilePage()
});

test('TC 17 - Verify sidebar menu - Logout', async ({ homePage, loginPage }) => {
    await homePage.clickAppointmentButton()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await homePage.clickSidebarMenu()
    await homePage.validateSidebarAfterLogin()
    await homePage.clickSidebarLogout()
    await homePage.validateLogout()
});

test('TC 18 - Verify link on footer - Email ', async ({ homePage }) => {
    await homePage.validateHomePage()
    
    const newPage = await homePage.clickEmail()
    await homePage.validateEmail(newPage)
});

test('TC 19 - Verify link on footer - Facebook ', async ({ homePage }) => {
    await homePage.validateHomePage()
    
    const newPage = await homePage.clickFacebook()
    await homePage.validateFacebook(newPage)
});

test('TC 20 - Verify link on footer - Twitter ', async ({ homePage }) => {
    await homePage.validateHomePage()
    
    const newPage = await homePage.clickTwitter()
    await homePage.validateTwitter(newPage)
});

test('TC 21 - Verify link on footer - Dribbble ', async ({ homePage }) => {
    await homePage.validateHomePage()
    
    const newPage = await homePage.clickDribbble()
    await homePage.validateDribbble(newPage)
});

test('TC 22 - "Apply for hospital readmission" checkbox can be selected and deselected', async ({ homePage, loginPage, appointmentPage }) => {
    await homePage.clickAppointmentButton()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await appointmentPage.validateAppointmentPage()
    await appointmentPage.allReadmission()
});

test('TC 23 - All "Healthcare program" radio button can be selected', async ({ homePage, loginPage, appointmentPage }) => {
    await homePage.clickAppointmentButton()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await appointmentPage.validateAppointmentPage()
    await appointmentPage.allHealthCareRadioButton()
});

test('TC 24 - All "Facility" dropdown menu can be selected', async ({ homePage, loginPage, appointmentPage }) => {
    await homePage.clickAppointmentButton()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await appointmentPage.validateAppointmentPage()
    await appointmentPage.allFacility()
});

test('TC 25 - Select visit date from date picker', async ({ loginPage, homePage, appointmentPage }) => {
    await homePage.clickAppointmentButton()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await appointmentPage.validateAppointmentPage()
    await appointmentPage.selectDate('25', 'January', '2025')
    await appointmentPage.validateSelectedDate('25/01/2025')
});

test('TC 26 - Make an appointment with all appointment fields are filled', async ({ loginPage, homePage, appointmentPage }) => {
    const commentText = "Thankyou"
    
    await homePage.clickAppointmentButton()
    await loginPage.login(process.env.DEMO_USER, process.env.DEMO_PASS)

    await appointmentPage.validateAppointmentPage()
    await appointmentPage.checkReadmission()
    await appointmentPage.selectHealthcareProgram()
    await appointmentPage.selectDate('13', 'December', '2025')
    await appointmentPage.validateSelectedDate('13/12/2025')
    await appointmentPage.fillCommentField(commentText)
    await expect(appointmentPage.commentTextbox).toHaveValue(commentText)
    await appointmentPage.clickBookingAppointmentButton()
    await appointmentPage.showAppointmentConfirmation()
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


