import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

formLogin = new FormGroup({
  email:new FormControl('', Validators.email),
  passWord:new FormControl('',Validators.minLength(6)),
})
  constructor() { }

  ngOnInit(): void {
  }

}
