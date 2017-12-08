 'use strict';

var TodoList = function() {
  this.todosArray = [];
  this.completed = false;
};

TodoList.prototype.displayTodos = function() {
  return this.todosArray;
};

TodoList.prototype.addTodo = function(todo) {
  this.todosArray.push(todo);
  return this.displayTodos();
};

TodoList.prototype.changeTodo = function(position, text) {
  this.todosArray[position] = text;
}

TodoList.prototype.toggleCompleted = function() {
  this.completed = !this.completed
}

module.exports = TodoList;
