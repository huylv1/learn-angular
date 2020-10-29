import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.scss'],
})
export class ReactiveLoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  constructor() {}

  ngOnInit(): void {}

  login() {
    const controls = this.loginForm.controls;
    
    console.log('User: ' + controls.username.value);
    console.log('Password: ' + controls.password.value);
  }
}
