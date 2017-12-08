 'use strict';

var TodoList = function() {
  this.todosArray = [];
};

TodoList.prototype.displayTodos = function() {
  return this.todosArray;
};

TodoList.prototype.addTodo = function(todo) {
  this.todosArray.push(todo);
  return this.displayTodos();
};

module.exports = TodoList;
