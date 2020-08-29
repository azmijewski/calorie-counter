import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AddProductDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      calories: ['', Validators.required],
      whey: ['', Validators.required],
      fat: ['', Validators.required],
      carbs: ['', Validators.required]
    });
  }

  addProduct(): void {
    if (this.form.valid) {
      this.dialogRef.close();
    }
  }
}
