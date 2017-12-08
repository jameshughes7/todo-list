var expect = require('chai').expect;
var TodoList = require('../todoList.js');

describe('todoList', function() {
  var todoList;

  beforeEach(function() {
    todoList = new TodoList();
  });
});

describe('todoList', function() {
  it('todoList is present', function() {
    expect(todoList).to.exist;
  });

  it('todoList starts with an empty array', function() {
    expect(todoList.todos).to.be.empty;
  });
});
