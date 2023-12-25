import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  loggedIn: boolean= false;
  uname: any;
  constructor(private route: ActivatedRoute, private loginService: LoginService){}

  ngOnInit(){
    this.loginService.getData().subscribe(data =>{
      this.loggedIn=data[0];
      this.uname= data[1];
    });
    console.log("Inside Welcome", this.loggedIn);
  }
}
