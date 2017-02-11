import { Component, Input, OnInit } from '@angular/core';

import { Todo } from './todo';

@Component({
  selector: 'todo',
  template: `
    <p>{{todo.contents}}</p>
  `
})
export class TodoComponent {
  @Input() todo: Todo;

  ngOnInit () {
    console.log(this.todo);
  }
}