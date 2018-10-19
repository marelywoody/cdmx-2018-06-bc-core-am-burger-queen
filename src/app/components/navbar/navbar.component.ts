import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nameUser: string;
  public emailUser: string;
  public userId: string;

  constructor( 
    public authentication: AuthenticationService
  ) { }

  ngOnInit() {
    this.authentication.stateAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.emailUser = auth.email;
        this.userId = auth.uid;
      } else {
        this.isLogin = false;
      }
    })
  }

  clickLogout() {
    this.authentication.logout();
  }

}
