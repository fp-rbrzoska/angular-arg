import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'fp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService) {
    this.isLoggedIn$ = authService.isLoggedIn$;
  }

  logIn() {
    this.authService.logIn();
  }
  logOut() {
    this.authService.logOut();
  }



}
