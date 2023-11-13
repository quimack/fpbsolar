import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './sections/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './sections/home/home.component';
import { WhoareusComponent } from './sections/whoareus/whoareus.component';
import { CardComponent } from './components/card/card.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsComponent } from './sections/questions/questions.component';
import { InstallationComponent } from './sections/installation/installation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    WhoareusComponent,
    QuestionsComponent,
    InstallationComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
