import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SecondCounterComponent } from './second-counter/second-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SecondCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
