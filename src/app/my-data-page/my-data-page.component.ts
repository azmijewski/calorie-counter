import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditAccountDialogComponent} from '../dialogs/edit-account-dialog/edit-account-dialog.component';
import {DeleteAccountDialogComponent} from '../dialogs/delete-account-dialog/delete-account-dialog.component';
import {ChangePasswordDialogComponent} from '../dialogs/change-password-dialog/change-password-dialog.component';
import {User} from '../model/user';
import {UserServiceWeb} from '../services/web/user.service-web';
import {ResultDialogComponent} from '../dialogs/result-dialog/result-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-data-page',
  templateUrl: './my-data-page.component.html',
  styleUrls: ['./my-data-page.component.css']
})
export class MyDataPageComponent implements OnInit {

  user: User;
  isDataLoaded = false;

  constructor(private dialog: MatDialog, private userWebService: UserServiceWeb, private router: Router) {
  }

  ngOnInit(): void {
    this.isDataLoaded = false;
    this.userWebService.loadUserData().subscribe(data => {
      this.user = data;
    }, error => {}, () => {
      this.isDataLoaded = true;
    });
  }

  editAccount(): void {
    const dialogRef = this.dialog.open(EditAccountDialogComponent, {
      width: '700px',
      data: this.user,
    });
    dialogRef.afterClosed().subscribe(acoount => {
      if (acoount) {
        this.userWebService.modifyUserData(acoount).subscribe(response => this.ngOnInit());
      }
    });
  }

  deleteAccount(): void {
    const dialogRef = this.dialog.open(DeleteAccountDialogComponent, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(deleteAccount => {
      if (deleteAccount) {
        this.userWebService.deleteAccount(deleteAccount).subscribe(response => {
          sessionStorage.removeItem('token');
          this.router.navigate(['']);
        }, error => {
          const resultDialog = this.dialog.open(ResultDialogComponent, {
            width: '700px',
            data: 'Nieprawidłowe hasło'
          });
        });
      }
    });
  }

  changePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(changePassword => {
      if (changePassword) {
        this.userWebService.changeUserPassword(changePassword).subscribe(response => {
          sessionStorage.setItem('token', btoa(this.user.username.concat(':').concat(changePassword.newPassword)));
        }, error => {
          const resultDialog = this.dialog.open(ResultDialogComponent, {
            width: '700px',
            data: 'Nieprawidłowe hasło'
          });
        });
      }
    });
  }

}
