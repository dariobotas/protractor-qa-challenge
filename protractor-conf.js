const path = require("path")
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var moment = require("moment");
chai.use(chaiAsPromised);

exports.config = {
    directConnection : true,
    framework : 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
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
          path.resolve(process.cwd(),"app/**/**.js")
        ],
        defaultTimeoutInterval: 30000
    },
    plugins: [
        // plugin to generate cucumber html report
        {
            path: "app/supports/cucumber-html-reporter.js",
            options: {
                jsonFile: "report.json",
                htmlFile: "app/report/cucumber-report"+ "_" + moment().format("YYYYMMDD_HHmmss")+".html"
            }
        }
    ]
}