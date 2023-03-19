const { browser, element } = require('protractor');

var expect = require('chai').expect

//Locators
const cookies = element(by.xpath('//*[@id="cookie-popup-with-overlay"]/div/div[3]/button[2]'));
const clearSelectionDeparture = element.all(by.xpath('//*[@id="ry-tooltip-1"]/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-origin-container/fsw-airports/div/fsw-airports-list/div[1]/button'));
const departureFlight = element(by.css('input[id="input-button__departure"]'));
const destinationFlight = element(by.css('input[id="input-button__destination"]'));
const oneWayTrip = element(by.xpath('/html/body/hp-app-root/hp-home-container/hp-home/hp-search-widget-container/hp-search-widget/div/hp-flight-search-widget-container/fsw-flight-search-widget-container/fsw-flight-search-widget/fsw-trip-type-container/fsw-trip-type/fsw-trip-type-button[2]/button'));
const oneWay = element(by.model('[.trip-type__button.ng-star-inserted]'));
const datePickerOneWay = element(by.css('[data-ref="input-button__dates-from"]'));
const selectAdultsXPath = element(by.xpath('//*[@id="ry-tooltip-8"]/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-passengers-container/fsw-passengers/fsw-passengers-picker-container/fsw-passengers-picker/ry-counter[1]/div[2]/div[3]'));
const selectTeensXPath = element(by.xpath('//*[@id="ry-tooltip-8"]/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-passengers-container/fsw-passengers/fsw-passengers-picker-container/fsw-passengers-picker/ry-counter[2]/div[2]/div[3]'));
const selectChildXPath = element(by.xpath('//*[@id="ry-tooltip-8"]/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-passengers-container/fsw-passengers/fsw-passengers-picker-container/fsw-passengers-picker/ry-counter[3]/div[2]/div[3]'));
const selectInfantXPath = element(by.xpath('//*[@id="ry-tooltip-8"]/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-passengers-container/fsw-passengers/fsw-passengers-picker-container/fsw-passengers-picker/ry-counter[4]/div[2]/div[3]'));
const selectDoneXPath = element(by.xpath('//*[@id="ry-tooltip-8"]/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-passengers-container/fsw-passengers/div/button'));
const selectSearchXPath = element(by.xpath('/html/body/hp-app-root/hp-home-container/hp-home/hp-search-widget-container/hp-search-widget/div/hp-flight-search-widget-container/fsw-flight-search-widget-container/fsw-flight-search-widget/div/div/div/button'));

//Old project Locators
const txtTodo = element(by.model('todoList.todoText'));
const addButton = element(by.css('[value="add"]'));
const todoList = element.all(by.xpath('//ul//li//label//span'));


//Function actions on the page
exports.clickAcceptCookies = () => {
    cookies.click();
}

exports.setDeparture = (departure) => {
    departureFlight.click();
    clearSelectionDeparture.click();

    departureFlight.sendKeys(departure);
    const departureFlightOption = element(by.css('[data-id='+departure+']'));
    departureFlightOption.click();
}

exports.setDestination = (destination) => {
    destinationFlight.sendKeys(destination);
    const destinationFlightOption = element(by.css('[data-id='+destination+']'));
    destinationFlightOption.click();
}

exports.clickOneWayTrip = () => {
    oneWayTrip.click();
}

exports.clickDatePickerOneWay = (date) => {
    datePickerOneWay.click();

    let newDate = date.split("/").reverse().join("-");

    const dateTravelOneWay = element(by.css('[data-id="'+newDate+'"]'));
    dateTravelOneWay.click();
}

exports.clickSelectNumberOfAdults = (numberAdults) => {
    numberAdults = numberAdults - 1;
    while(numberAdults > 0){
        selectAdultsXPath.click();
        numberAdults--;
    }
}

exports.clickSelectNumberOfTeens = (numberTeens) => {
    while(numberTeens > 0){
        selectTeensXPath.click();
        numberTeens--;
    }
}

exports.clickSelectNumberOfChilds = (numberChilds) => {
    while(numberChilds > 0){
        selectChildXPath.click();
        numberChilds--;
    }
}

exports.clickSelectNumberOfInfants = (numberInfants) => {
    while(numberInfants > 0){
        selectInfantXPath.click();
        numberInfants--;
    }
}

exports.clickDoneSelectPassengers = () => {
        selectDoneXPath.click();
}

exports.clickSearch = () => {
    selectSearchXPath.click();
}

exports.setTextTodo = (data) => {
    txtTodo.sendKeys(data);
}

exports.clickAddButton = () => {
    addButton.click();
}

exports.validateData=()=>{
    todoList.count().then((result) => {
        expect(result).to.equal(3);
    })
}
