# CURA Healthcare Playwright Automation 🏥
Automated test cases for CURA Healthcare, a demo healthcare website. This repository demonstrates how I use the Playwright framework for end-to-end testing of the appointment booking functionality.

## Features Tested ✅
- User login functionality 
- Appointment booking process 
- Validation for appointment form fields 
- Behavior of Cancel and Confirm buttons during booking 

## Technologies Used 💻
- [Playwright](https://playwright.dev/): A modern framework for fast and reliable end-to-end testing.
- JavaScript: Programming language used for writing the test scripts.

## Project Structure 📁
- `report/`: Contains test execution reports, including summaries, and screenshots of failed tests.
- `tests/`: Contains all the test scripts categorized by feature.
- `playwright.config.js`: Configuration file for setting up Playwright tests, including browser options and test timeouts.

## How to Run 🚀
To run the tests in this project, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/vidhapratiwi/cura-playwright-automation.git

2. Navigate to the project directory:
   ```bash
   cd cura-playwright-automation
   ```
3. Initialize Playwright (if setting up for the first time):
   ```bash
   npm init playwright@latest
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Run the tests:
   ```bash
   npx playwright test
   ```

## Test Cases 📋
This project includes both manual and automated test cases:

- **Manual Test Cases**: Documented in a [Google Sheets file](https://docs.google.com/spreadsheets/d/1AaGihuBk0tsV_MR3iEds_hqclmyuJ69c6CpkOHkHI_s/edit?usp=sharing) to plan and track test coverage before automation.
- **Automated Test Cases**: The scripts for automated tests are stored in the `tests/` directory.

## Related Projects 🔗
This repository is part of a collection of projects designed to showcase my QA engineering skills such as:

- [SauceDemo Selenium Automation](https://github.com/vidhapratiwi/saucedemo-selenium-automation.git): Automated tests for SauceDemo using the Selenium framework.
- [SauceDemo Playwright Automation](https://github.com/vidhapratiwi/saucedemo-playwright-automation.git): Automated tests for SauceDemo using the Playwright framework.

For more related projects, visit my [QA Portfolio repository](https://github.com/vidhapratiwi/QA-Portfolio.git) 🗃

## Contributing 🤝
Contributions are welcome! If you have suggestions for improving the test scripts or expanding the test coverage, feel free to open an issue or submit a pull request.

## License 📝
This project is not licensed under any specific license. Please contact the author for permission before using or modifying the code.
