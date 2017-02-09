import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { CoreComponentsModule } from '../core/core.module';
import { ClickerComponent } from '../core/clicker/clicker.component';

import { runDowngrade } from './downgradeComponents';

runDowngrade();

@NgModule({
  imports: [ BrowserModule, UpgradeModule, CoreComponentsModule ],
  entryComponents: [ ClickerComponent ]
})
export class CompatibilityModule {
  ngDoBootstrap() {}
}