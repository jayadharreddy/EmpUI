import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  loggedIn: boolean= false;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.loggedIn= true;
    console.log("Inside Welcome", this.loggedIn);
  }
}
