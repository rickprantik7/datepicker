import { Component,Output, OnInit,EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import "@angular/material/prebuilt-themes/indigo-pink.css";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //@Output() isLogout= new EventEmitter<void>();
  isSignedIn = false
  constructor(public firebaseService: FirebaseService){}
  ngOnInit(){
    if(localStorage.getItem('user')==null)
    this.isSignedIn=true;
    else
    this.isSignedIn=false;
  }
   onSignIn(email:string,password:string){
    this.firebaseService.signIn(email,password)
   if (this.firebaseService.isLoggedIn)
   this.isSignedIn=true;
   

  }
  handlelogout(){
    this.isSignedIn=false
  }
  logout(){
    this.firebaseService.logout();
    //this.isLogout.emit()
  }
 
}
