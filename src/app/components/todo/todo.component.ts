import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo: Todo = new Todo();

  name = '';
  content = '';

  constructor(
    private todoService: TodoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.todoService.logTodo();
  }

  addTodo(): void {
    this.todoService.addTodo(this.todo);
    this.toastr.success('Ajout', 'Le todo a bien été ajouté');
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo);
    this.toastr.error('Suppression', 'Le todo a bien été supprimé');
  }

  isBtnDisabled(): boolean {
    return this.isEmpty(this.todo.name) || this.isEmpty(this.todo.content);
  }

  isEmpty(chaine: string): boolean {
    return chaine.trim().length === 0;
  }
}
