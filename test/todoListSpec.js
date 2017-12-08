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

    it('has a default complete value of false', function() {
      expect(todoList.completed).to.equal(false)
    });

    it('todoList starts with an empty array', function() {
      expect(todoList.displayTodos()).to.be.empty;
    });

    it('can add a todo', function() {
      todoList.addTodo('item');
      expect(todoList.displayTodos()).to.include('item');
    });

    it('is able to change the text of a todo', function() {
      todoList.changeTodo(0, 'changed');
      expect(todoList.displayTodos()).to.include('changed');
    });

    it('is able to delete a todo', function() {
      todoList.addTodo('bossman');
      todoList.deleteTodo(0);
      expect(todoList.displayTodos()).that.does.not.include('bossman');
    })
  });
});
