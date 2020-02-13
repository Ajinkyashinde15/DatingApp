import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login()
  {
    this.authService.login(this.model).subscribe( next => 
    {
      this.alertify.success('Logged in succesfully');
    }, error =>
    {
      this.alertify.error('Logged in unsuccesfully');
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn()
  {
    return this.authService.loggedIn();
  }

  logout()
  {
    this.alertify.message('Logged out');
    localStorage.removeItem('token');
    console.log('logged out');
    this.router.navigate(['/home']);
  }
}
