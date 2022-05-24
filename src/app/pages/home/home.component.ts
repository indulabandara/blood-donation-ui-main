import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  adminLogin: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.adminLogin = this.loginService.isAdminLogin();
  }

}
