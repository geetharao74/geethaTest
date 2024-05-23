# Design Pattren 
Used page object model for UI testing
Using Page Object Model in test abstracts page interactions and definitions outside of spec files that allows for tests:
to be more readable, aviods repetation

# Files and Folder structure

all page objects are present in polestar/pageobjects
all tests can be found in tests folder
test results can be found in test-results folder

# Set up Project
npm install playwright @playwright/test typescript

# Run the tests

npx playwright test --ui will run the tests in UI mode

# View the reports

This generates HTML report, command to view the report

npx playwright show-report