import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule, // Required for browser rendering
    RouterModule.forRoot([]), // Add your routes here
    AppRoutingModule,
    
  ],
  bootstrap: [AppComponent] // Tells Angular to load AppComponent first
})
export class AppModule {}
