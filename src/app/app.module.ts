import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyBGEwAgcpE44yCKfaTqNr-4mOURkjyIWjE",
    authDomain: "jacobshead-8a5fa.firebaseapp.com",
    databaseURL: "https://jacobshead-8a5fa.firebaseio.com",
    storageBucket: "jacobshead-8a5fa.appspot.com",
    messagingSenderId: "524114114965"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
