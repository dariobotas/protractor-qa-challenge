const { browser, element } = require('protractor');

var expect = require('chai').expect

//Locators
//Fligh list Locators
const flightList = element.all(by.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-summary-container/flights-summary/div/div[1]/journey-container/journey/flight-list/div'));

//Fare value type locators
const valueFare = element(by.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/fare-selector-container/fare-selector/div/fare-table-container/fare-table/div[2]/ry-spinner/div[1]/div/div/fare-card/div/div/button'));
const regularFare = element(by.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/fare-selector-container/fare-selector/div/fare-table-container/fare-table/div[2]/ry-spinner/div[2]/div/div/fare-card/div/div/button'));
const familyPlusFare = element(by.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/fare-selector-container/fare-selector/div/fare-table-container/fare-table/div[2]/ry-spinner/div[3]/div/div/fare-card/div/div/button'));
const plusFare = element(by.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/fare-selector-container/fare-selector/div/fare-table-container/fare-table/div[2]/ry-spinner/div[4]/div/div/fare-card/div/div/button'));
const loginLater = element(by.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-passengers/pax-app-container/pax-app/ry-spinner/ry-login-touchpoint-container/ry-login-touchpoint/div/button/div'));

//3 Passengers details locators
const titleFirstPassenger = element(by.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-passengers/pax-app-container/pax-app/ry-spinner/div/div/div[2]/pax-app-form-container/pax-app-form/form/pax-passenger-container[1]/pax-passenger/div/pax-passenger-details-container/pax-passenger-details/pax-passenger-details-form-container/pax-details-form/ry-dropdown/div[2]/button'));
const titleSecondPassenger = element(by.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-passengers/pax-app-container/pax-app/ry-spinner/div/div/div[2]/pax-app-form-container/pax-app-form/form/pax-passenger-container[2]/pax-passenger/div/pax-passenger-details-container/pax-passenger-details/pax-passenger-details-form-container/pax-details-form/ry-dropdown/div[2]/button'));
const selectTitleMrFirstPassenger = element(by.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-passengers/pax-app-container/pax-app/ry-spinner/div/div/div[2]/pax-app-form-container/pax-app-form/form/pax-passenger-container[1]/pax-passenger/div/pax-passenger-details-container/pax-passenger-details/pax-passenger-details-form-container/pax-details-form/ry-dropdown/div[2]/div/div/ry-dropdown-item[1]/button'));
const selectTitleMrSecondPassenger = element(by.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-passengers/pax-app-container/pax-app/ry-spinner/div/div/div[2]/pax-app-form-container/pax-app-form/form/pax-passenger-container[2]/pax-passenger/div/pax-passenger-details-container/pax-passenger-details/pax-passenger-details-form-container/pax-details-form/ry-dropdown/div[2]/div/div/ry-dropdown-item[1]/button'));
const firstNameFirstPassenger = element(by.xpath('//*[@id="form.passengers.ADT-0.name"]'));
const lastNameFirstPassenger = element(by.xpath('//*[@id="form.passengers.ADT-0.surname"]'));
const firstNameSecondPassenger = element(by.xpath('//*[@id="form.passengers.ADT-1.name"]'));
const lastNameSecondPassenger = element(by.xpath('//*[@id="form.passengers.ADT-1.surname"]'));
const firstNameChildPassenger = element(by.xpath('//*[@id="form.passengers.CHD-0.name"]'));
const lastNameChildPassenger = element(by.xpath('//*[@id="form.passengers.CHD-0.surname"]'));

//Continue button locator
const continueButton = element(by.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/ng-component/div/continue-flow-container/continue-flow/div/div/span/button'));

//Function actions on the page
exports.selectFirstPriceValue = () => {
    flightList.first().element(by.tagName('button')).click();
}

exports.selectFare = (fare) => {
    switch(fare){
        case 'Value Fare': 
            valueFare.click();
            browser.sleep('2000');
            browser.actions().click(element(by.xpath('//*[@id="ry-modal-portal"]/div/fare-upgrade-container/fare-upgrade-component/ry-dialog/div/div/div[3]/button[2]'))).perform();
            break;
        case 'Regular Fare': 
            regularFare.click();
            break;
        case 'Family Plus Fare': 
            familyPlusFare.click();
            break;
        case 'Plus Fare': 
            plusFare.click();
            break;
        default:
            valueFare.click();
            browser.sleep('2000');
            browser.actions().click(element(by.xpath('//*[@id="ry-modal-portal"]/div/fare-upgrade-container/fare-upgrade-component/ry-dialog/div/div/div[3]/button[2]'))).perform();
            break;
    }
}

exports.loginLater = () => {
    loginLater.click();
}

exports.fillPassengers = (titleFirstPassengerData, firstNameFirstPassengerData, lastNameFirstPassengerData, titleSecondPassengerData, firstNameSecondPassengerData, lastNameSecondPassengerData, firstNameChildPassengerData, lastNameChildPassengerData) => {
    //first passenger fill
    //Title fill
    titleFirstPassenger.click();
    if(titleFirstPassengerData == "Mr"){
        selectTitleMrFirstPassenger.click();
    }
    //Names
    firstNameFirstPassenger.sendKeys(firstNameFirstPassengerData);
    lastNameFirstPassenger.sendKeys(lastNameFirstPassengerData);


    //second passenger fill
    //Title fill
    titleSecondPassenger.click();
    if(titleSecondPassengerData == "Mr"){
        selectTitleMrSecondPassenger.click();
    }
    //Names
    firstNameSecondPassenger.sendKeys(firstNameSecondPassengerData);
    lastNameSecondPassenger.sendKeys(lastNameSecondPassengerData);


    //child passenger fill
    //Names
    firstNameChildPassenger.sendKeys(firstNameChildPassengerData);
    lastNameChildPassenger.sendKeys(lastNameChildPassengerData);

}

exports.continueButton = () => {
    continueButton.click();
}