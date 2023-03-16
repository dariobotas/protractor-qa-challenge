var expect = require('chai').expect

const cookies = element(by.xpath('//*[@id="cookie-popup-with-overlay"]/div/div[3]/button[2]'));
//const clearSelection = element(by.css('button[aria-label="Clear Selection"]'));
const clearSelectionDeparture = element.all(by.xpath('//*[@id="ry-tooltip-1"]/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-origin-container/fsw-airports/div/fsw-airports-list/div[1]/button'));
const departureFlight = element(by.css('input[id="input-button__departure"]'));
const destinationFlight = element(by.css('input[id="input-button__destination"]'));
const destinationOption = '//*[@id="ry-tooltip-3"]/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-destination-container/fsw-airports/div/fsw-airports-list/div[2]/div[1]/fsw-airport-item[2]/span/span';

//Old project
const txtTodo = element(by.model('todoList.todoText'));
const addButton = element(by.css('[value="add"]'));
const todoList = element.all(by.xpath('//ul//li//label//span'));


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
