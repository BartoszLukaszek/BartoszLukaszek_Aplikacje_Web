import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { MediumCardComponent } from './medium-card/medium-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallCardComponent,
    MediumCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
