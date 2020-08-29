import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddProductDialogComponent} from '../dialogs/add-product-dialog/add-product-dialog.component';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  constructor(private dialog: MatDialog, public loginService: LoginService) { }

  ngOnInit(): void {
  }


  addProduct(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        console.log('Adding product');
      }
    });
  }
}
