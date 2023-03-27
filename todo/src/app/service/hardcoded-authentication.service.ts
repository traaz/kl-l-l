import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password : string){
    if(username === "ali" && password === "123"){
      sessionStorage.setItem('authenticaterUser', username);
      return true;
  }else{
    return false;
  }
}

isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticaterUser')
  //console.log(!(user === null));
  return !(user === null)
}
logout(){
  sessionStorage.removeItem('authenticaterUser');
}
}
