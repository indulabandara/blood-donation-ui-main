import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),
    ConfirmPassword: new FormControl(''),
    Name: new FormControl(''),
    City: new FormControl('')
  });

  passwordsMatch: boolean = true;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.passwordsMatch = this.registerForm.value.Password === this.registerForm.value.ConfirmPassword;

    if (this.passwordsMatch) {
      this.loginService.register(this.registerForm.value);
    }
  }

}
