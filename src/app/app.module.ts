import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  imports:      [ BrowserModule, UpgradeModule ],
  declarations: [ ]
})
export class AppModule {
  ngDoBootstrap() {}
}
