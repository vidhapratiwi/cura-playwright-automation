const { expect } = require("@playwright/test");

export class AppointmentPage {

    constructor(page) {
        this.page = page
        this.appointmentTitle = page.getByRole('heading', { name: 'Make Appointment' })
        this.facilityDropdown = page.locator('[id="combo_facility"]')
        this.readmissionCheckbox = page.locator('[id="chk_hospotal_readmission"]')

        this.medicareRadioButton = page.locator('[id="radio_program_medicare"]')
        this.medicaidRadioButton = page.locator('[id="radio_program_medicaid"]')
        this.noneRadioButton = page.locator('[id="radio_program_none"]')
        

        this.dateField = page.locator('#txt_visit_date');
        this.calendarIcon = page.locator('.glyphicon-calendar');
        this.datepickerSwitch = page.locator('.datepicker-switch'); // Menampilkan bulan & tahun
        this.nextButton = page.locator('.datepicker-days .next'); // Tombol untuk ke bulan berikutnya
        this.previousButton = page.locator('.datepicker-days .prev');


        this.commentTextbox = page.locator('[id="txt_comment"]')
        this.bookAppointmentButton = page.locator('[id="btn-book-appointment"]')

        this.confirmationTitle = page.getByRole('heading', { name: 'Appointment Confirmation' })
        this.confirmationSummary = page.locator('[id="summary"]')
    }

    async validateAppointmentPage(){
        await expect(this.appointmentTitle).toBeVisible()
        await expect(this.facilityDropdown).toBeVisible()
        await expect(this.readmissionCheckbox).toBeVisible()
        await expect(this.medicareRadioButton).toBeVisible()
        await expect(this.medicaidRadioButton).toBeVisible()
        await expect(this.noneRadioButton).toBeVisible()
        await expect(this.dateField).toBeVisible()
        await expect(this.commentTextbox).toBeVisible()
        await expect(this.bookAppointmentButton).toBeVisible()
    }

    async allReadmission(){
        await this.readmissionCheckbox.click()
        await expect(this.readmissionCheckbox).toBeChecked()
        await this.readmissionCheckbox.click()
        await expect(this.readmissionCheckbox).not.toBeChecked()
    }

    async allHealthCareRadioButton(){
    
        const radioButtons = this.page.locator('input[name="programs"]:checked')

        // default State
        const defaultCheckedCount = await radioButtons.count()
        console.log(defaultCheckedCount === 1 ? "Only one button is selected by default" : "Error: Multiple selections by default")

        //select and validate every option
        const programs = [
            { button: this.medicareRadioButton, name: "Medicare" },
            { button: this.medicaidRadioButton, name: "Medicaid" },
            { button: this.noneRadioButton, name: "None" }
        ]

        for (const program of programs) {
            await program.button.check()
            const checekCount = await radioButtons.count()
            console.log(checekCount === 1 ? 'Only one button is selected after selecting ${program.name}' : 'Error: Multiple selected after selecting ${program.name}')
        }

    }

    async allFacility(){
        //validate option
        const expectedOptions = ['Tokyo CURA Healthcare Center', 'Hongkong CURA Healthcare Center', 'Seoul CURA Healthcare Center'];
        const dropdownOptions = await this.facilityDropdown.locator('option').allTextContents();
        expect(dropdownOptions).toEqual(expectedOptions);

        //select and validate every option
        for (const option of expectedOptions) {
            await this.facilityDropdown.selectOption({ label: option });
            const selectedValue = await this.facilityDropdown.inputValue();
            console.log(`Selected: ${selectedValue}`);
            expect(selectedValue).toBe(option);
        }
    }

    //------------------------Date picker----------------------------

    async openDatePicker(){
        await this.calendarIcon.click()
    }

    async selectDate(day, month, year){
        await this.openDatePicker()

        const datepickerHeader = this.page.locator('.datepicker-switch').first();
        const nextButton = this.page.locator('.datepicker-days .next').first();
        const daySelector = this.page.locator(`.day`, { hasText: `${day}` });

        while (!(await datepickerHeader.textContent()).includes(`${month} ${year}`)) {
            await nextButton.click();
        }

        await daySelector.click();
    }

    async validateSelectedDate(expectedDate){
        const actualDate = await this.dateField.inputValue()
        expect(actualDate).toBe(expectedDate)
    }

    //--------------------------End date picker--------------------------------


    //------------------------Field---------------------------

    async selectFacility(){
        await this.facilityDropdown.click()
        await this.page.locator('option:has-text("Seoul CURA Healthcare Center")').click()
    }

    async checkReadmission(){
        await this.readmissionCheckbox.click()
        await expect(this.readmissionCheckbox).toBeChecked()
    }

    async selectHealthcareProgram(){
        await this.medicareRadioButton.check()

        //validate
        expect(await this.medicareRadioButton.isChecked()).toBeTruthy()
        //valide the other options are not checked
        expect(await this.medicaidRadioButton.isChecked()).toBeFalsy()
        expect(await this.noneRadioButton.isChecked()).toBeFalsy()
    }

    async fillCommentField(commentText){
        await this.commentTextbox.fill(commentText)
    }

    async clickBookingAppointmentButton(){
        await this.bookAppointmentButton.click()
    }

    async showAppointmentConfirmation(){
        await expect(this.confirmationTitle).toBeVisible()
        await expect(this.confirmationSummary).toBeVisible()
    }

    //----------------------End field--------------------




}