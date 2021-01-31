import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FormComponent } from './main-content/form/form.component';
import { GraphicComponent } from './main-content/graphic/graphic.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainContentComponent,
    FormComponent,
    GraphicComponent,
    FooterBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    FormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
