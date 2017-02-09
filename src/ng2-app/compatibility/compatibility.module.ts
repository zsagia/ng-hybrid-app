import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { CoreComponentsModule } from '../core/core.module';

import { ClickerComponent } from '../core/clicker/clicker.component';

declare var angular: any;

angular.module('ng1App')
  .directive('ng2Clicker', downgradeComponent({
    component: ClickerComponent,
    inputs: ['name'],
    outputs: ['clicked']
  }) as angular.IDirectiveFactory);

@NgModule({
  imports: [ BrowserModule, UpgradeModule, CoreComponentsModule ],
  entryComponents: [ ClickerComponent ]
})
export class CompatibilityModule {
  ngDoBootstrap() {}
}