exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs : ['features/*.feature'],

    capabilities : {
        browserName : 'chrome'
    },
    framework : 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnection : true,

    resultJsonOutputFile: 'report.json',

    cucumberOpts: {
        require: '**/**.js',
        /*format: 'json:./cucumberreports.json',
        onComplete: () => {
            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreports.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "Staging",
                    "Executed": "Remote"
                }
            };

            reportError.generate (options);
        }*/
    }

}