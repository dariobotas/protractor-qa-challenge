const path = require("path")
var reporter = require('cucumber-html-reporter')
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var moment = require("moment");
chai.use(chaiAsPromised);

exports.config = {
    directConnection : true,
    framework : 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //resultJsonOutputFile: './report.json',
    MultiCapabilities : {
        browserName : 'chrome',
        shardTestFiles: false,
        maxInstances: 2,
        marionette: true
    },
    ignoreUncaughtExceptions: true,
    specs : ['app/features/*.feature'],
    cucumberOpts: {
        monochrome: true,
        strict: true,
        plugin: ['pretty'],
        require: [
            /*'features/steps/angular-app.step.js','features/pages/**.js'*/path.resolve(process.cwd(),"app/**/**.js")
        ],
        
        //format: [
            //'json:./report.json',
            //'json:'+ path.resolve(process.cwd() + '/report.json'),
            //'pretty'
        //],
        defaultTimeoutInterval: 30000
    },
    /*onPrepare: function() {
        global.expect = chai.expect;

        browser.ignoreSynchronization = true;
    },*/
    plugins: [
        // plugin to create report parent folder
        /*{
            path: "app/supports/create-report-folder.js",
            options: {
                reportDir: "./"
            }
        },*/
        // plugin to generate cucumber html report
        {
            path: "app/supports/cucumber-html-reporter.js",
            options: {
                jsonFile: "report.json",
                htmlFile: "app/report/cucumber-report"+ "_" + moment().format("YYYYMMDD_HHmmss")+".html"
            }
        }
    ]
    /*jasmineNodeOpts: {
        format: 'json:./report.json'
    },
    onCleanUp: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './report.json',
            output: './app/report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
        };

        reporter.generate(options);
    },
    /*afterComplete: function () {
        var CucumberHtmlReport = require('cucumber-html-report');
  
        return CucumberHtmlReport.create({
            source: './report.json',
            dest: './app/report',
            title: 'OptiRoute - Protractor Test Run',
            component: new Date().toString()
        }).then(console.log).catch(console.log);
    },*/
    //ignoreUncaughtExceptions: true,
    //untrackOutstandingTimeouts: true
}