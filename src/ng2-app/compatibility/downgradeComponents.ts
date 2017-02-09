import { ClickerComponent } from '../core/clicker/clicker.component';
import { downgradeComponent } from '@angular/upgrade/static';

declare var angular: any;

export function runDowngrade () {
  angular.module('ng1App')
    .directive('ng2Clicker', downgradeComponent({
      component: ClickerComponent,
      inputs: ['name'],
      outputs: ['clicked']
    }) as angular.IDirectiveFactory);
}