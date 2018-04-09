import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Notice } from '../../shared/model/notice.model';
import { NewsService } from '../../shared/services/news.service';
import { SessionService } from '../../shared/services/session.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit, OnChanges {
  newsToShow: Array<Notice> = [];
  news: Array<Notice> = [];
  newsStored: Array<Notice> = [];
  visible: Boolean = false;
  icon: String = 'search';
  storedVisible: Boolean = false;

  constructor(
    private newsService: NewsService,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.newsService.list()
      .subscribe( (news) => {
        this.news = news.filter(notice => !notice.stored.includes(this.sessionService.user.id));
        this.newsToShow = this.news;
        this.newsStored = news.filter(notice => notice.stored.includes(this.sessionService.user.id));
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  toggleInput(): void {
    this.visible = !this.visible;

    if (this.icon === 'search') {
      this.icon = 'close';
    } else {
      this.icon = 'search';
    }
  }

  toggleStoredNews(event): void {
    if (event.target.className === 'news-received-btn active' || event.target.className === 'news-received-btn') {
      this.newsToShow = this.news;
      this.storedVisible = false;
    } else {
      this.newsToShow = this.newsStored;
      this.storedVisible = true;
    }
  }
}
