import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeService } from '../service/data/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message : string = "ali naber";
  name = ''
  welcomeMessageFromService : string =""

  constructor(private route: ActivatedRoute,
    private service: WelcomeService) { }

  ngOnInit(): void {
    console.log(this.message);
   // this.route.snapshot.params['name'] //urldeki name alacak
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    console.log("asc")
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldServiceWithPath(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    console.log("asc")
  }

  handleSuccessfulResponse(response : any){
    //console.log(response.message);
    this.welcomeMessageFromService = response.message
    console.log(response.message) //Hello World
  }

}
