import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HomeComponent } from './app.component.home';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }