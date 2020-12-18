import { Component, OnInit } from '@angular/core';
import { RestService } from './y.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private rs : RestService){}

  
  columns = ["Id", "Name", "Username", "Email","Street", "Suite", "City", "Zipcode","Lat","Lng","Phone","Website","Cname","CatchPhrase","Bs"];

  index = ["id", "name", "username", "email","street", "suite", "city", "zipcode","lat","lng","phone","website","cname","catchPhrase","bs"];

  users : Users[] = [];

  ngOnInit(): void {
    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.users = response;
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }


}