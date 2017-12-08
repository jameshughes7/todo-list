 'use strict';

function TodoList() {
  this.todosArray = [];
}

TodoList.prototype.todos = function() {
  return this.todosArray;
};

module.exports = TodoList
