import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Notice } from '../../../shared/model/notice.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  notice: Notice = new Notice();

  constructor(
    private routes: ActivatedRoute,
    private newsService: NewsService) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe( params => {
        this.newsService.get(params['id']).subscribe( notice => this.notice = notice );
      });
  }

}
