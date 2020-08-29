import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-edit-account-dialog',
  templateUrl: './edit-account-dialog.component.html',
  styleUrls: ['./edit-account-dialog.component.css']
})
export class EditAccountDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditAccountDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group( {
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      calories: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  editAccount(): void {
    if (this.form.valid) {
      this.dialogRef.close();
    }
  }
}
