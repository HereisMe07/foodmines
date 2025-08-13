import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/partials/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AllStudentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
