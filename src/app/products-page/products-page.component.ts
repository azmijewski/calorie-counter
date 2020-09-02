import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddProductDialogComponent} from '../dialogs/add-product-dialog/add-product-dialog.component';
import {LoginService} from '../services/login.service';
import {ProductWebService} from '../services/web/product-web.service';
import {Product} from '../model/product';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  products = new Array<Product>();
  page = 0;
  size = 10;
  hasNext = false;
  hasPrevious = false;
  total = 0;
  searchFilter = '';

  constructor(private dialog: MatDialog, public loginService: LoginService, private productWebService: ProductWebService) {
  }

  ngOnInit(): void {
    this.loadData(0, this.size);
  }

  ngAfterViewInit(): void {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
  }


  addProduct(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.productWebService.addProduct(product).subscribe(response => {
          this.loadData(0, 10);
        });
      }
    });
  }

  loadData(page: number, size: number): void {
    this.productWebService.getProductList(page, size).subscribe(data => {
      this.products = data.content;
      this.hasNext = !data.last;
      this.hasPrevious = !data.first;
      this.total = data.totalElements;
    });
  }

  search(): void {

  }


}
