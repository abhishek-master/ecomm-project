import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLogin = false;
  authError:string='';
  constructor(private seller: SellerService, private router: Router) { }
  
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: SignUp): void {
    console.warn(data) ;
    this.seller.userSignUp(data)
  }
  login(data: login): void {
    
    this.authError="" ;
    //console.warn(data) ;
    this.seller.userLogin(data) ;
    this.seller.isLoginError.subscribe((isError) => {
      if(isError){
        this.authError="Email or password incorrect !!"
      }
    })
  }

  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
