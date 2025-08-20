import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    
  ],
  imports: [
    BrowserModule, // Required for browser rendering
    RouterModule.forRoot([]), // Add your routes here
    AppRoutingModule,  
  ],
  bootstrap: [AppComponent] // Tells Angular to load AppComponent first
})
export class AppModule {}
