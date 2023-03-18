# qa-web-challenge
## Requirements
- Please automate a test to search for a flight, select VALUE fare, skip login after fare select, navigate through extras pages selecting seats and 20kg bags and verify a login popup is displayed before payment on https://www.ryanair.com/ie/en/
- Use any one of the following languages:
  - JavaScript (Protractor, selenium-webdriver) - preferred
  - Java
  - Python
- Use Page Object Pattern
- Give some documentation on why you chose what you did and documentation on how to run these tests
- Show reporting for your results
- We are fans of BDD and Cucumber in Ryanair, use these if you can
- Use all your testing and programming skills to prove your knowledge & ability

## Example test input
```
Given I search for a flight from "DUB" to "STN" on 12/01/2023 for 2 adults and 1 child
When I proceed to pay with selected seats and 20kg bags added
Then login popup shows up
```

# Execution
## Pre-requisites and installation
### Pre-requisites
In order to run the automation test we need to:
- Install Node.js;
- Install Protractor;
- Install Cucumber;

## Installation
#### protractor-cucumber-application
- step 1: Global Protractor Setup <br />
<b>install protractor :</b> npm i -g protractor<br />
- step 2: Local Setup <br />
clone the application <br />
git clone https://github.com/dariobotas/protractor-qa-challenge.git <br />
cd protractor-qa-challenge (if you create a folder with this name and clone to it)<br />
<b>install all the dependencies in package.json (like cucumber):</b> npm install <br />
<b>install webdriver-manager:</b> npm install -g webdriver-manager (to install webdriver-manager)<br />
- step 3: Start Application <br />
<b>update webdriver :</b> open console and run command webdriver-manager update<br />
<b>start webdriver :</b> open console and run command webdriver-manager start<br />
open one more console <br />
<b>run the application :</b> protractor app/protractor-conf.js<br />

## Run the test
Like in the step 3 of previous section, to run the test we need:
- <b>update webdriver :</b> open console and run command webdriver-manager update<br />
- <b>start webdriver :</b> open console and run command webdriver-manager start<br />
- open one more console <br />
- <b>run the application :</b> protractor app/protractor-conf.js<br />

## Why automation in this way?
<p>1º Since I didn't know how to work with protractor and how to structure 
the files to work with Page Object and Cucumber, I needed to search about it. </p>
<p>That's where i found this article https://medium.com/@amitprabhu/cucumber-with-protractor-275552fd32d9 (and a few others and videos as well) that helped me to understand how to work with it.</p>
<p></p>
// npm install protractor-beatiful-reporter --save-dev