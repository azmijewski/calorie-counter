import {Component, OnInit} from '@angular/core';
import {ArticleWebService} from '../services/web/article-web.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../model/article';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {

  article: Article;
  isDataLoaded = false;
  appUrl = environment.appUrl + 'photos/';

  constructor(private articleService: ArticleWebService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isDataLoaded = false;
    this.route.params.subscribe(param => {
      this.articleService.loadArticleById(param.id).subscribe(data => {
        this.article = data;
      }, error => {}, () => this.isDataLoaded = true);
    });
  }


}
