const { expect } = require("@playwright/test");

export class HomePage {

    constructor(page) {
        this.page = page
        this.homeTitle = page.getByText('CURA Healthcare Service We')
        this.appointmentButton = page.getByRole('link', { name: 'Make Appointment' })

        this.sidebarMenu = page.locator('[id="menu-toggle"]')
        this.sidebarOpen = page.locator('#sidebar-wrapper')
        this.sidebarHome = page.getByRole('link', { name: 'Home' })
        this.sidebarLogin = page.getByRole('link', { name: 'Login' })
        this.sidebarHistory = page.getByRole('link', { name: 'History' })
        this.sidebarProfile = page.getByRole('link', { name: 'Profile' })
        this.sidebarLogout = page.getByRole('link', { name: 'Logout' })
        
        this.header = page.locator('[class="header"]')
        this.footer = page.locator('footer')
        this.topButton = page.locator('[id="to-top"]')

        this.emailLink = page.locator('a[href="mailto:info@katalon.com"]')
        this.facebookLink = page.locator('//i[contains(@class, "fa-facebook")]')
        this.twitterLink = page.locator('//i[contains(@class, "fa-twitter")]')
        this.dribbbleLink = page.locator('//i[contains(@class, "fa-dribbble")]')
    }

    async navigate(){
        await this.page.goto('https://katalon-demo-cura.herokuapp.com/')
    }

    async validateHomePage(){
        await expect(this.homeTitle).toBeVisible()
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

    async scrollToBottom(){
        //scroll to the bottom of the page
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        //wait for footer to be visible
        await expect(this.footer).toBeVisible()
    }

    async scrollToTop(){
        await this.topButton.click()
        await expect(this.header).toBeVisible()
    }

    async validateSidebarBeforeLogin(){
        await expect(this.sidebarOpen).toBeVisible()
        await expect(this.sidebarHome).toBeVisible()
        await expect(this.sidebarLogin).toBeVisible()
    }

    async validateSidebarAfterLogin(){
        await expect(this.sidebarOpen).toBeVisible()
        await expect(this.sidebarHome).toBeVisible()
        await expect(this.sidebarHistory).toBeVisible()
        await expect(this.sidebarProfile).toBeVisible()
        await expect(this.sidebarLogout).toBeVisible()
    }

    async clickSidebarHome(){
        await this.sidebarHome.click()
    }

    async clickSidebarHistory(){
        await this.sidebarHistory.click()
    }

    async clickSidebarProfile(){
        await this.sidebarProfile.click()
    }

    async clickSidebarLogout(){
        await this.sidebarLogout.click()
    }

    async validateLogout(){
        await this.clickSidebarMenu()
        await this.validateSidebarBeforeLogin()
    }
    
    async clickEmail(){
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.emailLink.click()
        ])
        return newPage;
    }

    async validateEmail(newPage){
        await expect(newPage).toHaveTitle(/Mail/)
        await newPage.close()
    }

    async clickFacebook(){
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.facebookLink.click()
        ])
        return newPage;
    }

    async validateFacebook(newPage){
        await expect(newPage).toHaveTitle(/Facebook/)
        await newPage.close()
    }

    async clickTwitter(){
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.twitterLink.click()
        ])
        return newPage;
    }

    async validateTwitter(newPage){
        await expect(newPage).toHaveTitle(/X/)
        await newPage.close()
    }

    async clickDribbble(){
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.dribbbleLinkLink.click()
        ])
        return newPage;
    }

    async validateDribbble(newPage){
        await expect(newPage).toHaveTitle(/Dribbble/)
        await newPage.close()
    }

}