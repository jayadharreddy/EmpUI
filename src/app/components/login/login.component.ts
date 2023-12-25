import { Component } from '@angular/core';
import { NavigationError, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loggedIn: boolean = false;
  showPwd: boolean = false;
  sendData: any[] = [];

  constructor(private router: Router, private service: AppService, private loginService: LoginService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        console.error('Navigation Error:', event.error);
      }
    });
  }

  ngOnInit(){

  }

  login() {
    // Add your login logic here
    const validateLoginBody=
    {
      "username": this.username,
      "password": this.password
    }
    this.service.validateLogindata(validateLoginBody).subscribe(response=>{
      console.log("data:",response);
      if(response.toString() == '0'){
        console.log('Logging in...');
        // Example: navigate to a home page after successful login
        this.loggedIn= true;
        this.sendData.push(true);
        this.sendData.push(this.username);
        this.loginService.setData(this.sendData);
        this.router.navigate(['/app-welcome']);
        console.log('not navigted');
      }else{
        console.log("Invalid Logindata");
      }
    })

  }
  showPassword(){
    if (this.password === 'password') {
      this.password = 'text';
      this.showPwd = true;
    } else {
      this.password = 'password';
      this.showPwd = false;
    }
  }
  reset() {
    this.username = '';
    this.password = '';
  }
}
