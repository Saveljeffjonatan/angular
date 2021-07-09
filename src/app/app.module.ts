import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactComponent } from './views/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AboutComponent } from './views/about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		ContactComponent,
		AboutComponent,
    HomeComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		NoopAnimationsModule,
		MatInputModule,
		BrowserAnimationsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
