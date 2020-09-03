import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-account-confirmation-page',
  templateUrl: './account-confirmation-page.component.html',
  styleUrls: ['./account-confirmation-page.component.css']
})
export class AccountConfirmationPageComponent implements OnInit {

  isDone = false;
  isConfirmed = false;

  constructor(private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      console.log(param);
      this.loginService.confirmAccount(param.token).subscribe(response => {
        this.isDone = true;
        this.isConfirmed = true;
      }, error => {
        this.isConfirmed = false;
        this.isDone = true;
      });
    });
  }


}
