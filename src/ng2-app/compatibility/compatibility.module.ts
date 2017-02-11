import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { CoreComponentsModule } from '../core/core.module';
import { TodoModule } from '../todo-list/todo-list.module';
import { ClickerComponent } from '../core/clicker/clicker.component';
import { TodoListComponent } from '../todo-list/list/list.component';

import { runDowngrade } from './downgradeComponents';

runDowngrade();

@NgModule({
  imports: [ BrowserModule, UpgradeModule, CoreComponentsModule, TodoModule ],
  entryComponents: [ ClickerComponent, TodoListComponent ]
})
export class CompatibilityModule {
  ngDoBootstrap() {}
}