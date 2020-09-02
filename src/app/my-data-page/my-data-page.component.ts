import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditAccountDialogComponent} from '../dialogs/edit-account-dialog/edit-account-dialog.component';
import {DeleteAccountDialogComponent} from '../dialogs/delete-account-dialog/delete-account-dialog.component';
import {ChangePasswordDialogComponent} from '../dialogs/change-password-dialog/change-password-dialog.component';
import {User} from '../model/user';
import {UserServiceWeb} from '../services/web/user.service-web';

@Component({
  selector: 'app-my-data-page',
  templateUrl: './my-data-page.component.html',
  styleUrls: ['./my-data-page.component.css']
})
export class MyDataPageComponent implements OnInit {

  user: User;

  constructor(private dialog: MatDialog, private userWebService: UserServiceWeb) {
  }

  ngOnInit(): void {
    this.userWebService.loadUserData().subscribe(data => {
      this.user = data;
    });
  }

  editAccount(): void {
    const dialogRef = this.dialog.open(EditAccountDialogComponent, {
      width: '700px',
      data: this.user,
    });
    dialogRef.afterClosed().subscribe(acoount => {
      if (acoount) {
        this.userWebService.modifyUserData(acoount).subscribe();
      }
    });
  }

  deleteAccount(): void {
    const dialogRef = this.dialog.open(DeleteAccountDialogComponent, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(deleteAccount => {
      if (deleteAccount) {
        this.userWebService.deleteAccount(deleteAccount).subscribe();
      }
    });
  }

  changePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(changePassword => {
      if (changePassword) {
        this.userWebService.changeUserPassword(changePassword);
      }
    });
  }

}
