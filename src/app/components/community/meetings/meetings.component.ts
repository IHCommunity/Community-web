import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/model/user.model';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html'
})
export class MeetingsComponent implements OnInit {
  user: User = this.sessionService.user;

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
  }

}
