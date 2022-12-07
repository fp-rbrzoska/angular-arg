import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  private authSubj = new BehaviorSubject<boolean>(false)

  get isLoggedIn() {
    return this.authSubj.value
  };
  isLoggedIn$ = this.authSubj.asObservable()

  constructor() { }

  logIn() {
    this.authSubj.next(true)
  }

  logOut() {
    this.authSubj.next(false)
  }
}
