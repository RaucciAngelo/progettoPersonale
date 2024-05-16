import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AngeloComponent } from './angelo/angelo.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EsteticaComponent } from './estetica/estetica.component';
import { EsercUnoComponent } from './eserc-uno/eserc-uno.component';
import { EsercDueComponent } from './eserc-due/eserc-due.component';
import { EsercitazioneComponent } from './esercitazione/esercitazione.component';

@NgModule({
  declarations: [
    AppComponent,
    AngeloComponent,
    HomeComponent,
    EsteticaComponent,
    EsercUnoComponent,
    EsercDueComponent,
    EsercitazioneComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
