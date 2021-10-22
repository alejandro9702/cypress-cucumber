# EDGE LOGISTICS (QUOTES) AUTOMATION PROJECT

Automated tests using Cypress for the EDGE QUOTES Portal

### This project contains the automation of the Applicant portal, following it's different flows
This automation was created using a combination between the POM (Page Obect Model) design pattern AND commands, also the Cypress Framework (version 8.6.0), the project is configurated with Browserstack and it can be executed on the Chrome, Firefox and even others, by adding any new browsers to the broserstack.json file. Also, the project is configurated with Cypress Dashboard, so when the tests are executed their evidences can be saved as screeshots or videos, for which is necessary to have the correct key (more details in the Cypress Dashboard section).

### Tools used to create this project:
* Cypress
* Browserstack
* Cucumber
* Javascript

## Description of the Packages in this project

This project is divided in these packages: Fixtures, integration, plugins and suppport. And the Support package is divided in page_objects and step_definitions.

### Fixtures:
This folder helps keep data files such as data.json, which can be used to mock data for responses to routes.

### Integration:
This is an important folder. Because it contains all feature files (with .feature extension), this is where the tests are written using the Gherkin language. And all tests should sit inside it, because, by default, Cypress will only looks for test files here.

### Plugins:
Helps modify or extend the internal behavior of Cypress. Users can extend this framework or customize it beyond what Cypress offers by default.

### Support:
The support folder contains common files (reusable code, global variables, etc.), that needs to be accessed globally inside the framework.
In this folder, two more folders can be found, page_objets and step_definitions.

##### Pages:
Contains the .js files where the mapping of the web pages elements takes place. Such mappings are done by CSS selectors, like xpath, id, class, etc.

##### StepDefinitions:
In this folder, the call to each method declared in the page objects classes can be found.

### Other files:
* support.commands: In this file, the LSG URLs for each necessary web portal can be found.
* support.index: This file contains global configurations to modify Cypress. It's been used to add the xpath configuration because sometime is necessary to map objects with their xpath.
* Gitignore: In this file are excluded all files that are unnecessary or not recommended to upload on the project's remote repository.
* Browserstack.json: This file has the browserstack configuration, with the browsers in which the project can be executed. And, also run settings, which include: the Cypress config file path, Cypress version, project name, build name and parallel runs.
* Cypress.json: In this file is the cypress configuration, for example viewport or projectId. This configuration is necessary to execute Cypress in the dashboard.
* Package.json: This is a configuration file, containing data like the project's name, scripts that can be used and versions of components like cucumber, xpath, cypress, etc.

## How to use this project?

### How to install Cypress in the Local Machine?

* Open the project with the Visual Studio Code IDE
* Open the terminal
* To locally install Cypress in the project, type the command **npm install cypress**
* Wait for Cypress to be installed
* Cypress is installed and ready to be used

### How to use the Cypress - Cucumber integration?

#### First, let's verify if the Cypress-Cucumber preprocesor is installed, or install it otherwise

* Open the project with the Visual Studio Code IDE
* Go to the **package.json** file
* Look for the **"cypress-cucumber-preprocessor"** dependency, under **"devDependencies"**
* If the dependency is not there, open the terminal and type **npm install cypress-cucumber-preprocessor** (the version installed can now be checked in the package.json file)
* The Cypress-Cucumber preprocessor is installed and ready to be used. But feature files can't yet be read


#### And finally, add an extension or plugin to display and build cucumber in VSC

* By going to the VSC marketplace, or the extensions tab in VSC (Ctrl+Shift+X in Windows) one can look for and pick an extension
* The team uses and recommends: **https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete**

### How to execute features with Cypress in the Local Machine?

* Open the project with the Visual Studio Code IDE
* Open the terminal
* To run the project locally using Cypress, type the command **npm run cypress:open**
* On the emergent Cypress window, select the feature to execute
* And enjoy it!

### How to execute with Cypress on Browserstack?

* Open the project with Visual Studio Code IDE
* Open the terminal
* Type the command **npx browserstack-cypress run --sync**
* And enjoy it!

### How to execute on the Cypress Dashboard?
For this is necesary the key of the project on the dashboard

* Open the project with Visual Studio Code IDE
* Open the terminal
* Type the command **cypress run --record --key xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx**. 
By default it is executed using the Electron browser, but if the instruction **--browser chrome** (or any other supported browser) is added to the command after the "key" instruction, it will run in such browser
* And enjoy it!
