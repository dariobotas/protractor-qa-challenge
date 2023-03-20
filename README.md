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
- Use Windows, because all of this was created in Windows OS
- Install Java SE
- Install Google Chrome
- Install Git
- Install VS Code (but not necessary)
- Install Node.js
- Install Protractor (step 1 - next section)
- Install Cucumber (step 2 - next section)

## Installation
### protractor-cucumber-application
- step 1: Global Protractor Setup <br />
<b>install protractor:</b> `npm i -g protractor`<br />
![image](https://user-images.githubusercontent.com/10281720/226211171-5b4e807a-e8b8-49ab-9ec9-7d8909c227d1.png)

- step 2: Local Setup <br />
  - clone the application <br />
  - `git clone https://github.com/dariobotas/protractor-qa-challenge.git` <br />
    ![image](https://user-images.githubusercontent.com/10281720/226212084-cdf954d4-5538-4247-a201-a51c59232d2d.png)
    ![image](https://user-images.githubusercontent.com/10281720/226212267-3fb69eea-a0bb-4afe-bd86-75d0202f2bbe.png)
  - `cd protractor-qa-challenge` (if you create a folder with this name and clone to it)<br />
    ![image](https://user-images.githubusercontent.com/10281720/226212230-dc579fcc-4363-4510-8110-cb07e3469f80.png)
  - in case you clone my repository with my node_modules, may you need this extra steps:
    - Open powershell
    - `cd protractor-qa-challenge` <b>(go to this folder)</b>
    - <b>type</b> `rm -r node_modules/` <b>(to remove node_modules installed)</b>
      ![image](https://user-images.githubusercontent.com/10281720/226212447-4fd1648e-9e80-4ae5-ab7e-74641a0b32a1.png)
  - <b>install all the dependencies in package.json (like cucumber): </b> `npm install`
    ![image](https://user-images.githubusercontent.com/10281720/226212622-9f16dd2f-a824-4fbb-8075-f186e27da50a.png)
  - <b>install webdriver-manager: </b> `npm install -g webdriver-manager` (to install webdriver-manager if not installed)<br />
- step 3: Start Application
  - <b>update webdriver</b> (open console and run command): `webdriver-manager update`
    ![image](https://user-images.githubusercontent.com/10281720/226212695-c99d882d-4b9b-4c58-a1d4-5f6063439b21.png)
  - <b>start webdriver</b> (run command): `webdriver-manager start`
    ![image](https://user-images.githubusercontent.com/10281720/226212767-98ea524b-b2d4-4ded-8b53-fffd8be0e6e0.png)
  - open one more console
  - <b>run the application</b> (run command): `protractor ./protractor-conf.js`
    ![image](https://user-images.githubusercontent.com/10281720/226212848-0f94007f-efb1-4539-8ebf-381e96e942d1.png)
    ![image](https://user-images.githubusercontent.com/10281720/226217013-5e896d05-d1f5-42c6-a844-c089941f9c2f.png)
  - <b>stop webdriver</b> (run command): `webdriver-manager shutdown`
    - As alternative you can do the shorcut ctrl + c or press 'Enter'
  ![image](https://user-images.githubusercontent.com/10281720/226213215-b79a47c1-f681-43b0-afbb-ea95e96eeadf.png)<br />
  <b>Note:</b> You can run all of this using command prompt, powershell, git bash.<br />

## Run the test
Like in the step 3 of previous section, to run the test we need:
- <b>update webdriver:</b> open console and run command `webdriver-manager update`
- <b>start webdriver:</b> open console and run command `webdriver-manager start`
- open one more console
- <b>run the application:</b> `protractor ./protractor-conf.js`<br />

## Reporting
  <p>The HTML report is generated inside the ./reports/html_report folder.</p>
  <p>In this folder the report is generated after execution and with the date of execution.</p>
  <p>You can open it with any web browser.</p>
  <img src="https://user-images.githubusercontent.com/10281720/226221478-a2d3cf27-d435-4724-adb1-8a2979d58796.png">


## Why automation in this way?
<p>1. Since I didn't know how to work with protractor and how to structure 
the files to work with Page Object and Cucumber, I needed to search about it. </p>
<p>That's where I found <a href='https://medium.com/@amitprabhu/cucumber-with-protractor-275552fd32d9'>this article</a> and github repository. A few other articles and videos as well that helped me to understand how to work with it.</p>
<p>These and other fonts/resources like stackoverflow helped me to automate as per requested.</p>
<p>2. Automate in this ways make sense and helped me to learn and understand how to automate with Protractor.</p>
<p>3. With this in mind, the objective with all of this is to have (ideally) this work tree with Protractor:</p>
<pre>
│   LICENSE
│   package-lock.json
│   package.json
│   protractor-conf.js
│   README.md
│
├───app
│   ├───features
│   │   │   angular-app.feature
│   │   │
│   │   └───steps
│   │           angular-app.step.js
│   │
│   ├───pages
│   │       ryanair-bag.js
│   │       ryanair-chooseseats.js
│   │       ryanair-extras.js
│   │       ryanair-homepage.js
│   │       ryanair-reviewPay.js
│   │       ryanair-ValueFare.js
│   │
│   └───supports
│           create-report-folder.js
│           cucumber-html-reporter.js
│           cucumber-json-report.js
│
└───reports
    ├───html_report
    │       cucumber_report_20230319_163214.html
    │
    ├───json_report
    │       cucumber_report.json
</pre>
<p>In the bellow tree the idea is to have:</p>
 - app folder: where reside all the folders and files related to the Protractor automation
 - reports folder: where the json and HTML reports will be created
<p>Inside the app folder there is three main folders:</p>
 - features: where are the feature files with the scenarios executed by the Js files inside the steps folder
 - pages: where are the files with all the locators and respective functions to provide the inputs in the website for each page
 - supports: where are the script files to provide the json and HTML reports
 
## Lessons learned
<p>Automate with Protractor was for sure a very interesting challenge that i'll use to get better with Testing Automation itself and using different tools for it.</p>
<p>With this challenge I was encouraged to continue using the tool and improve the scenario as well in order to refine the automation and reporting.</p>
