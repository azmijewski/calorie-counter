import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ArticleWebService} from '../services/web/article-web.service';
import {MatPaginator} from '@angular/material/paginator';
import {Product} from '../model/product';
import {ShortArticle} from '../model/short-article';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-list-page',
  templateUrl: './article-list-page.component.html',
  styleUrls: ['./article-list-page.component.css']
})
export class ArticleListPageComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  articles = new Array<ShortArticle>();
  page = 0;
  size = 10;
  hasNext = false;
  hasPrevious = false;
  total = 0;

  constructor(private articleService: ArticleWebService,
              public router: Router) { }

  ngOnInit(): void {
    this.loadData(0, this.size);
  }

  ngAfterViewInit(): void {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
  }

  loadData(page: number, size: number): void {
    this.articleService.loadArticles(page, size).subscribe(data => {
      this.articles = data.content;
      this.hasNext = !data.last;
      this.hasPrevious = !data.first;
      this.total = data.totalElements;
    });
  }

}
