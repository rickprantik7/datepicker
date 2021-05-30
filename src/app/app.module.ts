import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { SignupComponent } from './comp/signup/signup.component';
import { FirebaseService } from './services/firebase.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({ apiKey: "AIzaSyDdR2f_ia_zsUemkRScKpXujb7HvfYLFMg",
    authDomain: "datepicker-61ef2.firebaseapp.com",
    projectId: "datepicker-61ef2",
    storageBucket: "datepicker-61ef2.appspot.com",
    messagingSenderId: "416004568589",
    appId: "1:416004568589:web:0194ba49660551370ac744",
    measurementId: "G-2VYJWY6J4V"}),
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
