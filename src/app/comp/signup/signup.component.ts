import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import {Router, Route} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output() isLogIn= new EventEmitter<void>();
  isSignedIn = false
  constructor(public firebaseService: FirebaseService, private router: Router){}
  ngOnInit(){
    if(localStorage.getItem('user')==null)
    this.isSignedIn=true;
    else
    this.isSignedIn=false;
  }
   onSignUp(email:string,password:string){
    this.firebaseService.signIn(email,password)
   if (this.firebaseService.isLoggedIn)
   this.isSignedIn=true;
   
   this.router.navigate(['../']);
   this.isLogIn.emit()
  }
  handlelogout(){
    
  }

}
