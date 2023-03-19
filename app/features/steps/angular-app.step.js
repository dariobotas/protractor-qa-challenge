const { browser, element } = require('protractor');
const ryanairHompage = require('../../pages/ryanair-homepage')
const valueFare = require('../../pages/ryanair-ValueFare')
const seats = require('../../pages/ryanair-chooseseats')
const bags = require('../../pages/ryanair-bag')
const extras = require('../../pages/ryanair-extras')
const review = require('../../pages/ryanair-reviewPay')

module.exports = function () {
    this.Given(/^I search for a flight from "([^"]*)" to "([^"]*)" on ([^"]*) for ([^"]*) adults and ([^"]*) childs$/, (departure, destination, date, numberAdults, numberChilds) => {
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
            //select number of adults
            ryanairHompage.clickSelectNumberOfAdults(numberAdults);
            //select number of childs
            ryanairHompage.clickSelectNumberOfChilds(numberChilds);
            //Done Select Passengers
            ryanairHompage.clickDoneSelectPassengers();
            //Search Flight
            ryanairHompage.clickSearch();
            browser.sleep('4000');
        });

    this.When(/^I choose "([^"]*)"$/, function (fare) {
        //Select first value proposed
        valueFare.selectFirstPriceValue();
        browser.sleep('3000');
        //Select fare
        valueFare.selectFare(fare);
        browser.sleep('2500');
        //Select login Later
        valueFare.loginLater();
        browser.sleep("2000");
    });

    this.When(/^I fill the passenger fields with the names "([^"]*)" "([^"]*)" "([^"]*)", "([^"]*)" "([^"]*)" "([^"]*)", "([^"]*)" "([^"]*)"$/, function (titleFirstPassenger, firstNameFirstPassenger, lastNameFirstPassenger, titleSecondPassenger, firstNameSecondPassenger, lastNameSecondPassenger, firstNameChildPassenger, lastNameChildPassenger) {
        //Fill Passenger information
        valueFare.fillPassengers(titleFirstPassenger, firstNameFirstPassenger, lastNameFirstPassenger, titleSecondPassenger, firstNameSecondPassenger, lastNameSecondPassenger, firstNameChildPassenger, lastNameChildPassenger);
        browser.sleep('1800');
        //Click continue button
        valueFare.continueButton();
        browser.sleep('4000');
    });

    this.When(/^I choose the seats for the ([^"]*) passengers with "([^"]*)"$/, function (numberPassengers, fastTrack) {
        //Click got it
        seats.clickOkGotIt();
        browser.sleep('4000');
        //Select Seats
        seats.selectSeats(numberPassengers);
        browser.sleep('3000');
        //Click Coninue button
        seats.clickContinueButton();
        browser.sleep('3000');
        //Skip fast track
        seats.clickFastTrack(fastTrack);
        browser.sleep('5000');
    });

    this.When(/^I choose 1 "([^"]*)", ([^"]*)kg bags added for all passengers with "([^"]*)"$/, function (cabinBag, kgBag, extra) {
      //Choose cabin bag
      bags.selectCabinBag(cabinBag);
      browser.sleep('1000');
      //choose 20kg checkin bag
      bags.selectCheckinKgBagForAllPassengers(kgBag);
      browser.sleep('1000');
      //click continue button
      bags.selectContinueButton();
      browser.sleep('5000');
      //skip all extras
      if(extra == "no extras"){
          extras.continueButtonFirstExtra();
          browser.sleep('5000');
          extras.continueButtonSecondExtra();
      }
      browser.sleep('7000');
    });

    this.Then('login popup shows up', () => {
        //validate pop-up
        review.ValidatePopupLogin();
    });
}