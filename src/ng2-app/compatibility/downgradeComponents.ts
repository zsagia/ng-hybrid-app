import { ClickerComponent } from '../core/clicker/clicker.component';
import { TodoListComponent } from '../todo-list/list/list.component';
import { downgradeComponent } from '@angular/upgrade/static';

declare var angular: any;

export function runDowngrade () {
  angular.module('ng1App')
    .directive('ng2Clicker', downgradeComponent({
      component: ClickerComponent,
      inputs: ['name'],
      outputs: ['clicked']
    }) as angular.IDirectiveFactory);

  angular.module('ng1App')
    .directive('todoList', downgradeComponent({
      component: TodoListComponent
    }) as angular.IDirectiveFactory);
}