import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { FancyListComponent } from './fancy-list/fancy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    GenericInputComponent,
    FancyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
