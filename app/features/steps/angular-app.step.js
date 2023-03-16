var angularPage = require('../../pages/ryanair-homepage')

module.exports = function () {
    this.Given('I search for a flight from "DUB" to "STN" on 12/01/2023 for 2 adults and 1 child', (departure, destination, date, adultsNumber, childsNumber) => {
        browser.get('https://www.ryanair.com/ie/en/');
        browser.manage().window().maximize();
    });

    this.When('I proceed to pay with selected seats and 20kg bags added', function (kgBag) {
        angularPage.setTextTodo('test');
        angularPage.clickAddButton();
    });

    this.Then('login popup shows up', () => {
        angularPage.validateData();
    })
}