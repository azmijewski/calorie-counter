import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import validate = WebAssembly.validate;
import {User} from '../../model/user';

@Component({
  selector: 'app-edit-account-dialog',
  templateUrl: './edit-account-dialog.component.html',
  styleUrls: ['./edit-account-dialog.component.css']
})
export class EditAccountDialogComponent implements OnInit {

  form: FormGroup;
  data: User;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditAccountDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group( {
      firstname: [this.data.firstName, Validators.required],
      lastname: [this.data.lastName, Validators.required],
      calories: [this.data.calorie, Validators.required],
      email: [this.data.email, Validators.required, Validators.email],
      weight: [this.data.weight, Validators.required],
      height: [this.data.height, Validators.required]
    });
  }

  editAccount(): void {
    if (this.form.valid) {
      const userDto: User = {
        id: null,
      firstName: this.form.value.firstname,
      lastName: this.form.value.lastname,
      email: this.form.value.email,
      weight: this.form.value.weight,
      height: this.form.value.height,
      calorie: this.form.value.calories,
      birthDate: this.data.birthDate,
      password: null,
      };
      this.dialogRef.close(userDto);
    }
  }
}
