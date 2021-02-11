import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {}

  logTodo(): void {
    this.todos.forEach((item) => {
      console.log(item.name + ' : ' + item.content);
    });
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteTodo(todo: Todo): void {
    const todoIndex = this.todos.indexOf(todo);
    this.todos.splice(todoIndex, 1);
  }
}
