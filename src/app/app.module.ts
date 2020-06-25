import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFilterPipe } from './app.pipe';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeeData } from './employee-data';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EmployeeFilterPipe,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(EmployeeData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
