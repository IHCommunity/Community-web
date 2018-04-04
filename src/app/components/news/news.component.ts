import { Component, OnInit } from '@angular/core';
import { Notice } from '../../shared/model/notice.model';
import { NewsService } from '../../shared/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  news: Array<Notice> = [];
  visible: Boolean = false;
  icon: String = 'search';

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.list()
      .subscribe( (news) => {
        console.log(news);
        this.news = news;
      });
  }

  toggleInput() {
    this.visible = !this.visible;

    if (this.icon === 'search') {
      this.icon = 'close';
    } else {
      this.icon = 'search';
    }
  }
}
