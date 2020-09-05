import {Component, Inject, inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeleteAccount} from '../../model/delete-account';

@Component({
  selector: 'app-delete-account-dialog',
  templateUrl: './delete-account-dialog.component.html',
  styleUrls: ['./delete-account-dialog.component.css']
})
export class DeleteAccountDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<DeleteAccountDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: ['', Validators.required]
    });
  }

  deleteAccount(): void {
    if (this.form.valid) {
      const deleteAccount: DeleteAccount = {
        password: this.form.value.password
      };
      this.dialogRef.close(deleteAccount);
    }
  }

}
