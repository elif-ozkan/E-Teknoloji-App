import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  model: User = new User();
  constructor(private accountService: AccountService) {} //Account service import edildi. password işlemi için
  login(loginForm: any) {
    // Giriş işlemleri burada yapılır
  }

  loginProcess(form: NgForm) {
    //Login işlemi için fonksiyon tanımlanır
    this.accountService.login(this.model); //login işlemi için fonksiyonun tanımlanması gerekiyor
    console.log(this.model.userName);
    console.log(this.model.password);
    console.log(this.accountService.isLoggedIn());
  }
}
