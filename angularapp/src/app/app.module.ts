import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApifeedComponent } from './apifeed/apifeed.component';
import { DbfeedComponent } from './dbfeed/dbfeed.component';

import {FormsModule} from '@angular/forms'

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApifeedComponent,
    DbfeedComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTablesModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
