# LoopQATest Test Automation Framework
**Overview**

This framework is designed for automating the testing of a Task Management Application, focusing on verifying column-based card organization, card attributes, and metadata such as tags. Built with Playwright, the framework delivers robust and reliable test automation with cross-browser compatibility, making it suitable for modern web application testing.

**Features**
1. Page Object Model (POM): Ensures clean separation of concerns and reusable locators.
2. Parameterized Testing: Structured using a configuration object (TEST_CASES) for scalable test scenarios.
3. Dynamic Locators: Automatically generates locators for cards based on column and name, reducing redundancy.
4. Reusable Fixtures: Simplifies test setup and ensures consistency across tests.
5. Comprehensive Reporting: Screenshots and video recordings for failed tests.
6. State Management: Authorization handled via cookies for faster test execution.

**Prerequisites**
Before running the framework, ensure the following:

- Node.js installed (version 16 or higher).
- Playwright installed: ```npm install playwright```

**Installation**
1. Clone the repository: ```git clone <repository_url>```
2. Install dependencies: ```npm install```

**Running Tests**
To execute all tests: ```npx playwright test```
To run a specific test file: ```npx playwright test tests/<test_file>.spec.js```

**Test Configuration**
Update the `TEST_CASES` object in `config/testCases.js` to define new test scenarios.

**Folder Structure**
```
|-- playwright/
|   |-- .auth/
|       |-- user.json
|-- pom/
|   |-- components/
|   |   |-- SideMenuComponent.js
|   |-- pages/
|   |   |-- HomePage.js
|   |   |-- LoginPage.js
|   |   |-- ProjectPage.js
|-- tests/
|   |-- auth.setup.js
|   |-- project.spec.js
|-- fixtures/
|-- ReadMe.md
|-- testData.js
```




