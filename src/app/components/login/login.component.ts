import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password:string;

  constructor(
    public authentication: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  loginUser() {
    this.authentication.login(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/menu']);
    }).catch((err) => {
      console.log(err);
    })
  }
}
