import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInUser: any = undefined

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private toastr: ToastrService) { }

  login(username: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(username, password).then(
      res => {
        this.loggedInUser = res
        if (res.user?.emailVerified || this.loggedInUser.user.multiFactor.user.email === "admin@gmail.com") {
          sessionStorage.setItem('loggedInUser', this.loggedInUser.user.multiFactor.user.email);
          this.router.navigate(['/home']);
        } else {
          this.toastr.error("Verify Email address", "Email not verified")
        }
      }
    ).catch(err => {
      this.toastr.error("Invalid Username or Password", "Invalid Login")
    })
  }

  logout() {
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  register(registerUser: any) {
    return this.afAuth
      .createUserWithEmailAndPassword(registerUser.Email, registerUser.Password)
      .then((result) => {
        this.setUserData(registerUser);
        this.sendVerificationEmail()
        this.toastr.info("Please check emails and validate the email address", "Validate Email")
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  sendVerificationEmail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification());
  }

  setUserData(userData: any) {
    const hospitals = this.db.list('hospitals');
    hospitals.push({
      "Name": userData.Name,
      "Email": userData.Email,
      "City": userData.City
    });
  }

  isAdminLogin() {
    return sessionStorage.getItem('loggedInUser') === "admin@gmail.com";
  }

  isLoggedIn() {
    return sessionStorage.getItem('loggedInUser') ? true : false;
  }

}
