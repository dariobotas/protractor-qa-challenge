const path = require("path")
var reporter = require('cucumber-html-reporter')

exports.config = {
    directConnection : true,
    framework : 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //resultJsonOutputFile: './app/report.json',
    capabilities : {
        browserName : 'chrome',
        marionette: true
    },
    specs : ['features/*.feature'],
    cucumberOpts: {
        strict: true,
        require: [
            /*'features/steps/angular-app.step.js','features/pages/**.js'path.resolve(process.cwd(),*/ "**/**.js"
        ],
        format: 'pretty',
        format: 'json:./report.json'
        
        
        //defaultTimeoutInterval: 30000
    },
    /*onComplete: () => {
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
    /*onCleanUp: function () {
        var CucumberHtmlReport = require('cucumber-html-report');
  
        return CucumberHtmlReport.create({
            source: './report.json',
            dest: './app/report',
            title: 'OptiRoute - Protractor Test Run',
            component: new Date().toString()
        }).then(console.log).catch(console.log);
    },*/
    ignoreUncaughtExceptions: true,
    untrackOutstandingTimeouts: true
}