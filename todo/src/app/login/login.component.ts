import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "ali"
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor(private router : Router,
    private hardcodedAuthenticatonService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username);
    if(this.hardcodedAuthenticatonService.authenticate(this.username, this.password)){
      //redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }

}
