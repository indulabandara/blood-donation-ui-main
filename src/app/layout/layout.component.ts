import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  adminLogin: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.adminLogin = this.loginService.isAdminLogin();
  }

  logout() {
    this.loginService.logout();
  }
}
