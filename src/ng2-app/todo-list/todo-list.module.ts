import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TodoListComponent, TodoComponent, AddTodoComponent],
  exports: [TodoListComponent]
})
export class TodoModule {}