import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditAccountDialogComponent} from '../dialogs/edit-account-dialog/edit-account-dialog.component';

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

}
