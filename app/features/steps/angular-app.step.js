var angularPage = require('../../pages/angular-page')

module.exports = function () {
    this.Given('I\'m on AngularJS page', () => {
        browser.get('https://angularjs.org/');
    });

    this.When('Enter data in textbox', function () {
        angularPage.setTextTodo('test');
        angularPage.clickAddButton();
    });

    this.Then('Validate data in textbox', () => {
        angularPage.validateData();
    })
}