import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";

import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLog: Object ={
    email: '',
    password: ''
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login () {
    this.userService.login(this.userLog)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/water']);
        },
        err => console.error(err)
      )
  }
}
