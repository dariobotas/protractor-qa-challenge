var ryanairHompage = require('../../pages/ryanair-homepage')

module.exports = function () {
    this.Given(/^I search for a flight from "([^"]*)" to "([^"]*)" on ([^"]*) for ([^"]*) adults and ([^"]*) childs$/, (departure, destination, date, numberAdults, numberChilds) => {
    //this.Given('I search for a flight from {string} to {string}', async function (departure, destination) {
            browser.get('https://www.ryanair.com/ie/en/');
            browser.manage().window().maximize();
            //click accept cookies
            ryanairHompage.clickAcceptCookies();
            //Set departure
            ryanairHompage.setDeparture(departure);
            //set destination
            ryanairHompage.setDestination(destination);
            //click one way
            ryanairHompage.clickOneWayTrip();
            //click date
            ryanairHompage.clickDatePickerOneWay(date);
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
            browser.sleep('10000');
            //browser.pause();
        });

    this.When(/^I proceed to pay with selected seats and ([^"]*)kg bags added$/, function (kgBag) {
        //ryanairHompage.setTextTodo('test');
        //ryanairHompage.clickAddButton();
    });

/*    this.Then('login popup shows up', () => {
        ryanairHompage.validateData();
    })*/
}