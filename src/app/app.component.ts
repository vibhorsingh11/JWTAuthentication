import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JWTAuthentication';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
