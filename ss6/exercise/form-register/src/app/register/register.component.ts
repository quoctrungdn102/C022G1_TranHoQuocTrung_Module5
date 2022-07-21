import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  registerForm = new FormGroup({
      email: new FormControl('', Validators.email),
      pwPass: new FormGroup({
        password: new FormControl(),
        confirmPassword: new FormControl('', Validators.email),
      }, this.checkPassword),
      country: new FormControl('Đà Nẵng'),
      age: new FormControl(),
      gender: new FormControl(true),
      phone: new FormControl('', Validators.pattern('^(84)[0-9]{9,10}$')),
    },
  );

  ngOnInit(): void {
  }

  checkPassword(abstractControl: AbstractControl): any {
    console.log(abstractControl.value.password);
    console.log(abstractControl.value.confirmPassword);
    const passWord = abstractControl.value.password;
    const confirm = abstractControl.value.confirmPassword;
    return passWord !== confirm ? {notEqual: true} : null;
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
  }
}
