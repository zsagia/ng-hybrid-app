import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { ClickerComponent } from './clicker/clicker.component';

@NgModule({
  imports:      [ BrowserModule, UpgradeModule ],
  declarations: [ ClickerComponent ],
  entryComponents: [ ClickerComponent ]
})
export class AppModule {
  ngDoBootstrap() {}
}
