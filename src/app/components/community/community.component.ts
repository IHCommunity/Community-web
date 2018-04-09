import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/services/session.service';
import { User } from '../../shared/model/user.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html'
})
export class CommunityComponent implements OnInit {
  user: User = this.sessionService.user;

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
  }

}
