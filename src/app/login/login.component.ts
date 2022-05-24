import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private loginServive: LoginService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.loginServive.login(this.loginForm.value.userName, this.loginForm.value.password);
  }

}
