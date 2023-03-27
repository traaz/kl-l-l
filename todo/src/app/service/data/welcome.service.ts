import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HelloWorldBean{
  constructor(public message : string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");

  }

  executeHelloWorldServiceWithPath(name : string) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);

  }
}
