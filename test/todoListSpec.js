var expect = require('chai').expect;
var TodoList = require('../todoList.js');

describe('todoList', function() {
  var todoList;

  beforeEach(function() {
    todoList = new TodoList();
  });

  describe('todoList', function() {
    it('todoList is present', function() {
      expect(todoList).to.exist;
    });

    it('todoList starts with an empty array', function() {
      expect(todoList.displayTodos()).to.be.empty;
    });

    it('can add a todo', function() {
      todoList.addTodo('item');
      expect(todoList.displayTodos()).to.include('item');
    });
  });
});
