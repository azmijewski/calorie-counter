import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-calorie-product-dialog',
  templateUrl: './add-calorie-product-dialog.component.html',
  styleUrls: ['./add-calorie-product-dialog.component.css']
})
export class AddCalorieProductDialogComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(): void {

  }
}
