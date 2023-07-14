import { Component } from '@angular/core';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private accountService: AccountService) {}
  title = 'shop';

  isLoggedIn() {
    //Login işlemi için ayrı bir fonksiyon tanımladık.

    return this.accountService.isLoggedIn();
  }
  isLogOut() {
    //LogOut işlemi için ayrı fonksiyon tanımladık.
    return this.accountService.isLogOut();
  }
}
