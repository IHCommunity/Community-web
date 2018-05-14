import { SessionService } from './../../../shared/services/session.service';
import { Component, OnInit, Input } from '@angular/core';
import { Notice } from '../../../shared/model/notice.model';
import { NewsService } from '../../../shared/services/news.service';
import { User } from '../../../shared/model/user.model';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  @Input() notice: Notice;
  @Input() newsToShow: Array<Notice>;
  @Input() news: Array<Notice>;
  @Input() newsStored: Array<Notice>;
  user: User = this.sessionService.user;

  constructor(
    private sessionService: SessionService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
  }

  toggleStore() {

    if (this.newsStored.includes(this.notice)) {
      this.notice.storeNotice = false;
      this.newsStored.splice(this.newsStored.indexOf(this.notice), 1);
      this.news.push(this.notice);
      this.newsToShow = this.news;
    } else {
      this.notice.storeNotice = true;
      this.news.splice(this.news.indexOf(this.notice), 1);
      this.newsStored.push(this.notice);
      this.newsToShow = this.newsStored;
    }
    this.newsService.edit(this.notice).subscribe();
  }

  check() {
    this.newsService.check(this.notice).subscribe();
    this.news.splice(this.news.indexOf(this.notice), 1);
  }

  delete() {
    this.newsService.delete(this.notice.id).subscribe( () => {
      if (this.news.includes(this.notice)) {
        this.news.splice(this.news.indexOf(this.notice), 1);
      } else {
        this.newsStored.splice(this.newsStored.indexOf(this.notice), 1);
      }
    });
  }
}
