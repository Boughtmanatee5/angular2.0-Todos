/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, For} from 'angular2/angular2';

@Component({
  selector: 'todolist'
})
@View({
  template: `
    <h1>Angular 2.0 Todo</h1>
    <input #todoInput (keyup)="doneTyping($event)">
    <button (click)="addTodo(todoInput.value)">Add Todo</button>
    <ul>
      <li *for="#todo of todos">{{todo}}</li>
    </ul>
  `,
  directives: [For]
})
class TodoList {
  name:string;
  todos:Array<string>

  constructor () {
    this.todos = ['eat', 'sleep', 'poop'];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  doneTyping($event) {
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}

bootstrap(TodoList);
