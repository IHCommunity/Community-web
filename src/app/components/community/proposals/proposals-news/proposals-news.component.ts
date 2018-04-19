import { Component, OnInit } from '@angular/core';
import { Notice } from '../../../../shared/model/notice.model';
import { NewsService } from '../../../../shared/services/news.service';

@Component({
  selector: 'app-proposals-news',
  templateUrl: './proposals-news.component.html'
})
export class ProposalsNewsComponent implements OnInit {
  news: Array<Notice> = [];
  visible: Boolean = false;
  icon: String = 'search';
  pattern: String;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.listUnchecked()
      .subscribe( news => this.news = news);
  }

  toggleInput(): void {
    this.visible = !this.visible;

    if (this.icon === 'search') {
      this.icon = 'close';
    } else {
      this.icon = 'search';
    }
  }

}
