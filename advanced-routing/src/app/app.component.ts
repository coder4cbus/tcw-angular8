import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example App';
  loginLabel = 'Log in';
  user = 'na';
  constructor( private auth: AuthService, private router: Router ) {}

  login() {
    if(this.loginLabel === 'Log in') {
      this.auth.login();
      this.user = 'Admin';
      this.loginLabel = 'Log out';
    } else {
      this.auth.logout();
      this.user = 'na';
      this.loginLabel = 'Log in';
      let link = ['/home'];
      this.router.navigate(link);
    }
  }
}
