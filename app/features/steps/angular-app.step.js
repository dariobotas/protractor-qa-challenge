var ryanairHompage = require('../../pages/ryanair-homepage')

module.exports = function () {
    this.Given(/^I search for a flight from "([^"]*)" to "([^"]*)"$/, (departure, destination) => {
    //this.Given('I search for a flight from {string} to {string}', async function (departure, destination) {
            browser.get('https://www.ryanair.com/ie/en/');
            browser.manage().window().maximize();
            //
            ryanairHompage.clickAcceptCookies();
            ryanairHompage.setDeparture(departure);
            ryanairHompage.setDestination(destination);


            browser.sleep('10000');
            //browser.pause();
        });

/*    this.When('I proceed to pay with selected seats and 20kg bags added', function (kgBag) {
        ryanairHompage.setTextTodo('test');
        ryanairHompage.clickAddButton();
    });

    this.Then('login popup shows up', () => {
        ryanairHompage.validateData();
    })*/
}