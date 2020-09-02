import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../model/product';

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
      brand: [''],
      calories: ['', Validators.required],
      whey: ['', Validators.required],
      fat: ['', Validators.required],
      carbs: ['', Validators.required]
    });
  }

  addProduct(): void {
    if (this.form.valid) {
      const product: Product = {
        id: null,
      name: this.form.value.name,
      brand: this.form.value.brand,
      calories: this.form.value.calories,
      whey: this.form.value.whey,
      fat: this.form.value.fat,
      carbohydrates: this.form.value.carbs
      };
      this.dialogRef.close( product);
    }
  }
}
