import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.css']
})
export class ChangePasswordDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<ChangePasswordDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {validator: this.checkPassword});
  }
  checkPassword(group: FormGroup): any {
    const pass = group.get('newPassword').value;
    const confirmPass = group.get('repeatPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  }

  changePassword(): void {
    if (this.form.valid) {
      this.dialogRef.close();
    }
  }
}
