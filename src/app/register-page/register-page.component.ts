import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string;
  isRegisterSuccess = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      birthDate: ['', Validators.required]}, {validator: this.checkPassword});
  }
  onSubmit(): void {
    if (this.registerForm.valid) {
      const user: User = {
        id: null,
        username: this.registerForm.value.login,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.firstName,
        email: this.registerForm.value.email,
        weight: 0,
        height: 0,
        calorie: 0,
        birthDate: this.registerForm.value.birthDate,
        password: this.registerForm.value.password
      };
      this.loginService.register(user).subscribe(response => {this.isRegisterSuccess = true;}, error => {
        if (error.status === 409) {
          this.errorMessage = 'Konto z podanym emailem lub loginem istanieje juz w naszym serwisie';
        } else {
          this.errorMessage = 'Wystąpił nieoczekiwany bląd podczas tworzenia konta';
        }
      });
    }
  }
  checkPassword(group: FormGroup): any {
    const pass = group.get('password').value;
    const confirmPass = group.get('repeatPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  }

}
