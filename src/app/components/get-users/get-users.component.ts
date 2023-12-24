import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent implements OnInit{
  users: any[] | undefined ;
  url: string = environment.url;

  constructor(private service: AppService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
      console.log("Users: ",data);
    })

  }

}
