import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Meal} from '../../model/meal';

@Component({
  selector: 'app-add-meal-dialog',
  templateUrl: './add-meal-dialog.component.html',
  styleUrls: ['./add-meal-dialog.component.css']
})
export class AddMealDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AddMealDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  add(): void {
    if (this.form.valid) {
      const meal: Meal = {
        id: null,
        name: this.form.value.name,
        calories: 0,
        whey: 0,
        fat: 0,
        carbohydrates: 0,
        default: false
      };
      this.dialogRef.close(meal);
    }
  }
}
