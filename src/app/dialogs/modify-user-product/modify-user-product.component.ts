import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modify-user-product',
  templateUrl: './modify-user-product.component.html',
  styleUrls: ['./modify-user-product.component.css']
})
export class ModifyUserProductComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<ModifyUserProductComponent>,
              @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      weight: [this.data, Validators.min(0)]
    });
  }
  modify(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value.weight);
    }
  }

}
