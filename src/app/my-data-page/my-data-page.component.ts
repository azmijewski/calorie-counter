import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditAccountDialogComponent} from '../dialogs/edit-account-dialog/edit-account-dialog.component';
import {DeleteAccountDialogComponent} from '../dialogs/delete-account-dialog/delete-account-dialog.component';
import {ChangePasswordDialogComponent} from '../dialogs/change-password-dialog/change-password-dialog.component';

@Component({
  selector: 'app-my-data-page',
  templateUrl: './my-data-page.component.html',
  styleUrls: ['./my-data-page.component.css']
})
export class MyDataPageComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  editAccount(): void {
    const dialogRef = this.dialog.open(EditAccountDialogComponent, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(acoount => {
      if (acoount) {
        console.log('Editing ccount');
      }
    });
  }
  deleteAccount(): void {
    const dialogRef = this.dialog.open(DeleteAccountDialogComponent, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(password => {
      if (password) {
        console.log('Editing account');
      }
    });
  }
  changePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(password => {
      if (password) {
        console.log('Editing ccount');
      }
    });
  }

}
