import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {validator: this.checkPassword});
  }
  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Register data valid');
    }
  }
  checkPassword(group: FormGroup): any {
    const pass = group.get('password').value;
    const confirmPass = group.get('repeatPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  }

}
