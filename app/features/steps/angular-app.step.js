var expect = require('chai').expect

module.exports = function () {
    this.Given('I\'m on AngularJS page', () => {
        browser.get('https://angularjs.org/');
    });

    this.When('Enter data in textbox', function () {
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();
    });

    this.Then('Validate data in textbox', () => {
        var todoList = element.all(by.xpath('//ul//li//label//span'));
        todoList.count().then((result) => {
            expect(result).to.equal(3);
        })
    })
}