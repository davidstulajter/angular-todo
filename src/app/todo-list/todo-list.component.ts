import { Component, OnInit } from '@angular/core';
// 1. we need to import TodoService so the TypeScript compiler knows about it.
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // 2. we add a todos property to store our todo Objects.
  private todos: Object[];

  constructor(
    // 3. this is shorthand, it adds a todoService property to the class
    // and instantiates it to what is passed into constructor
    private todoService: TodoService
    ) { }

  ngOnInit() {
    // 4. we populate the todo property with the todos from our service.
    this.todos = this.todoService.todos;
  }
}
