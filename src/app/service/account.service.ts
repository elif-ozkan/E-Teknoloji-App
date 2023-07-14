import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {
  constructor() {}
  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == 'elif' && user.password == '123456') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.userName);
      return true;
    } else {
      return false;
    }
  }
  isLoggedIn() {
    this.loggedIn; //True-false olarak döner.
  }
  isLogOut() {
    localStorage.removeItem('isLogged'); //Login olma ile ilgili kısmı silinir.
    this.loggedIn = false;
  }
}
