import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public email:string;

  constructor( 
    public auth: AuthenticationService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  resetPassword(email: string) {
    this.auth.resetPassword(email);
    this.router.navigate(['/']);
  }

}
