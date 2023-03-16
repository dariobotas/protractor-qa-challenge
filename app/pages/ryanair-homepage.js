var expect = require('chai').expect

const txtTodo = element(by.model('todoList.todoText'));
const addButton = element(by.css('[value="add"]'));
const todoList = element.all(by.xpath('//ul//li//label//span'));

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
