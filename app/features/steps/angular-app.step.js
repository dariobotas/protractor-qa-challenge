const { browser, element } = require('protractor');
const ryanairHompage = require('../../pages/ryanair-homepage')
const valueFare = require('../../pages/ryanair-ValueFare')
const seats = require('../../pages/ryanair-chooseseats')
const bags = require('../../pages/ryanair-bag')
const extras = require('../../pages/ryanair-extras')
const review = require('../../pages/ryanair-reviewPay')
//const {Given, When, And, Then} = require('cucumber')

module.exports = function () {
    this.Given(/^I search for a flight from "([^"]*)" to "([^"]*)" on ([^"]*) for ([^"]*) adults and ([^"]*) childs$/, (departure, destination, date, numberAdults, numberChilds) => {
    //Given('I search for a flight from {string} to {string} for {int}\/{int}\/{int} for {int} adults and {int} childs', function (departure, destination, day,month,year,numberAdults,numberChilds) {
            browser.get('https://www.ryanair.com/ie/en/');
            browser.manage().window().maximize();
            //click accept cookies
            ryanairHompage.clickAcceptCookies();
            //Set departure
            ryanairHompage.setDeparture(departure);
            browser.sleep('1000');
            //set destination
            ryanairHompage.setDestination(destination);
            browser.sleep('1000');
            //click one way
            ryanairHompage.clickOneWayTrip();
            browser.sleep('1000');
            //click date
            ryanairHompage.clickDatePickerOneWay(date);
            browser.sleep('1000');
            //console.log(numberAdults);
            //select number of adults
            ryanairHompage.clickSelectNumberOfAdults(numberAdults);
            //select number of childs
            ryanairHompage.clickSelectNumberOfChilds(numberChilds);
            //Done Select Passengers
            ryanairHompage.clickDoneSelectPassengers();
            //Search Flight
            ryanairHompage.clickSearch();
            //console.log(numberChilds);
            browser.sleep('4000');
            //browser.pause();
        });

    this.When(/^I choose "([^"]*)"$/, function (fare) {
    //this.When(/^I choose "([^"]*)", fill the passenger fields with the names "([^"]*)" "([^"]*)" "([^"]*)", "([^"]*)" "([^"]*)" "([^"]*)", "([^"]*)" "([^"]*)" and proceed to pay with selected seats and ([^"]*)kg bags added$/, function (fare,titleFirstPassenger, firstNameFirstPassenger, lastNameFirstPassenger, titleSecondPassenger, firstNameSecondPassenger, lastNameSecondPassenger, firstNameChildPassenger, lastNameChildPassenger, kgBag) {
        //ryanairHompage.setTextTodo('test');
        //ryanairHompage.clickAddButton();
        
        //Select first value proposed
        valueFare.selectFirstPriceValue();
        browser.sleep('3000');
        //Select fare
        valueFare.selectFare(fare);
        browser.sleep('2500');
        //Select login Later
        valueFare.loginLater();
        browser.sleep("2000");
        //Fill Passenger information
        /*valueFare.fillPassengers(titleFirstPassenger, firstNameFirstPassenger, lastNameFirstPassenger, titleSecondPassenger, firstNameSecondPassenger, lastNameSecondPassenger, firstNameChildPassenger, lastNameChildPassenger);
        browser.sleep('1800');
        valueFare.continueButton();
        browser.sleep('7000');*/

        //Choose Seats
        
        //console.log(fare);
    });

    //this.When(/^And fill the passenger fields with the names "([^"]*)" "([^"]*)" "([^"]*)", "([^"]*)" "([^"]*)" "([^"]*)", "([^"]*)" "([^"]*)"$/, (titleFirstPassenger, firstNameFirstPassenger, lastNameFirstPassenger, titleSecondPassenger, firstNameSecondPassenger, lastNameSecondPassenger, firstNameChildPassenger, lastNameChildPassenger) => {
    this.When(/^I fill the passenger fields with the names "([^"]*)" "([^"]*)" "([^"]*)", "([^"]*)" "([^"]*)" "([^"]*)", "([^"]*)" "([^"]*)"$/, function (titleFirstPassenger, firstNameFirstPassenger, lastNameFirstPassenger, titleSecondPassenger, firstNameSecondPassenger, lastNameSecondPassenger, firstNameChildPassenger, lastNameChildPassenger) {
        //ryanairHompage.setTextTodo('test');
        //ryanairHompage.clickAddButton();
        valueFare.fillPassengers(titleFirstPassenger, firstNameFirstPassenger, lastNameFirstPassenger, titleSecondPassenger, firstNameSecondPassenger, lastNameSecondPassenger, firstNameChildPassenger, lastNameChildPassenger);
        browser.sleep('1800');
        valueFare.continueButton();
        browser.sleep('4000');
    });

    this.When(/^I choose the seats for the ([^"]*) passengers with "([^"]*)"$/, function (numberPassengers, fastTrack) {
        //Click got it
        seats.clickOkGotIt();
        browser.sleep('4000');
        //var elt = document.getElementById('seat-03D');
        //var elt = element(by.id('seat-03D'));//browser.executeScript("document.getElementById('seat-03D');");//
        //var re = expect(elt.getTagName()).toBe('button');
        //console.log(re);
        seats.selectSeats(numberPassengers);
        browser.sleep('3000');
        seats.clickContinueButton();
        browser.sleep('3000');
        seats.clickFastTrack(fastTrack);
        browser.sleep('5000');
    });

    this.When(/^I choose 1 "([^"]*)", ([^"]*)kg bags added for all passengers with "([^"]*)"$/, function (cabinBag, kgBag, extra) {
        bags.selectCabinBag(cabinBag);
        browser.sleep('1000');
        bags.selectCheckinKgBagForAllPassengers(kgBag);
        browser.sleep('1000');
        bags.selectContinueButton();
        browser.sleep('5000');
        if(extra == "no extras"){
            extras.continueButtonFirstExtra();
            browser.sleep('4000');
            extras.continueButtonSecondExtra();
        }
        browser.sleep('7000');
    });

 /*   this.When(/^I choose "([^"]*)"$/, () => {
        //ryanairHompage.setTextTodo('test');
        //ryanairHompage.clickAddButton();
        //if(extra == "no extras"){
            extras.continueButtonFirstExtra();
            browser.sleep('4000');
            extras.continueButtonSecondExtra();
        //}
        browser.sleep('5000');
    });*/

    this.Then('login popup shows up', () => {
        //ryanairHompage.validateData();
        review.ValidatePopupLogin();
    });
}