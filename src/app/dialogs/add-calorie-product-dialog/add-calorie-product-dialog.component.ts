import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductWebService} from '../../services/web/product-web.service';
import {ProductWithWeight} from '../../model/product-with-weight';
import {MatDialogRef} from '@angular/material/dialog';
import {NewUserProduct} from '../../model/new-user-product';

@Component({
  selector: 'app-add-calorie-product-dialog',
  templateUrl: './add-calorie-product-dialog.component.html',
  styleUrls: ['./add-calorie-product-dialog.component.css']
})
export class AddCalorieProductDialogComponent implements OnInit {

  products = new Array<ProductWithWeight>();
  form: FormGroup;
  first = true;
  last = true;
  searchFilter = '';
  isSearchActivated = false;
  page = 0;
  size = 5;

  constructor(private productService: ProductWebService,
              private dialogRef: MatDialogRef<AddCalorieProductDialogComponent>) { }

  ngOnInit(): void {
    this.chooseMode();
  }

  addProduct(product: ProductWithWeight): void {
    if (product){
      this.dialogRef.close({
        productId: product.product.id,
        weight: product.weight
      });
    }
  }
  convertList(products: Array<Product>): Array<ProductWithWeight> {
    const result = new Array<ProductWithWeight>();
    for (const xproduct of products) {
      const productWithWeight: ProductWithWeight = {
        product: xproduct,
        weight: 100
      };
      result.push(productWithWeight);
    }
    return result;
  }

  getName(product: Product): string {
    let name = product.name;
    if (product.brand) {
      name = name.concat(' (').concat(product.brand).concat(')');
    }
    return name;
  }

  previousPage(): void {
    this.page--;
    this.chooseMode();
  }

  nextPage(): void {
    this.page++;
    this.chooseMode();
  }
  chooseMode(): void{
    if (this.searchFilter) {
      if (!this.isSearchActivated){
        this.page = 0;
      }
      this.isSearchActivated = true;
    } else {
      if (this.isSearchActivated) {
        this.page = 0;
      }
      this.isSearchActivated = false;
    }
    if (this.isSearchActivated){
      this.search();
    } else {
      this.loadData();
    }
  }

  loadData(): void {
    this.productService.getProductList(this.page, this.size).subscribe(data => {
      this.products = this.convertList(data.content);
      this.last = data.last;
      this.first = data.first;
    });
  }

  search(): void {
    this.productService.searchProducts(this.page, this.size, this.searchFilter).subscribe(data => {
      this.products = this.convertList(data.content);
      this.last = data.last;
      this.first = data.first;
    });
  }
}
