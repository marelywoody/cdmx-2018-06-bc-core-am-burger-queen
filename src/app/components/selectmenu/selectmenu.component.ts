import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-selectmenu',
  templateUrl: './selectmenu.component.html',
  styleUrls: ['./selectmenu.component.css']
})
export class SelectmenuComponent implements OnInit {

  public isLogin: boolean;
  public emailUser: string;
  public userId: string;
  public isBreackfast: boolean;
  public isDinner: boolean;
 
  constructor(
    public authentication: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loginAuth();
    this.breackfast();
    this.dinner();
  }

  loginAuth() {
    this.authentication.stateAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.emailUser = auth.email;
        this.userId = auth.uid;
        this.isBreackfast = false;
        this.isDinner = false;
      } else {
        this.isLogin = false;
        this.router.navigate(['/']);
      }
    });
  }
  breackfast() {
    this.isBreackfast = true;
    this.isDinner = false;
  }

  dinner() {
    this.isDinner= true;
    this.isBreackfast = false;
  }
}
