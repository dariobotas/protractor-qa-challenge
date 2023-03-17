const { browser, element } = require('protractor');

var expect = require('chai').expect

//Locators
//Extra list Locators
const continueButtonFirstExtra = element(by.xpath('/html/body/app-root/ng-component/div/div/div/main/div/button'));
const continueButtonSecondExtra = element(by.xpath('/html/body/app-root/ng-component/div/div/div/main/div/ng-component/button'));

exports.continueButtonFirstExtra = () => {
    continueButtonFirstExtra.click();
}

exports.continueButtonSecondExtra = () => {
    continueButtonSecondExtra.click();
}