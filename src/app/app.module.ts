import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./nav-bar/material.module";
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './nav-bar/header/header.component';
import { MenuComponent } from './nav-bar/menu/menu.component';
import { ThemeService } from './nav-bar/theme.service';
import { StyleManagerService } from './service-inerface/style.service';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ForcastComponent } from './forcast/forcast.component';
import { WeeklyComponent } from './weekly/weekly.component';



@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    ForcastComponent,
    WeeklyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    
  ],
  providers: [StyleManagerService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
