var reporter = require('cucumber-html-reporter');
var moment = require("moment");

module.exports = {
    postResults: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './report/cucumber_report.json',
            output: './app/report/cucumber_report'+ "_" + moment().format("YYYYMMDD_HHmmss")+'.html',
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
    }
};