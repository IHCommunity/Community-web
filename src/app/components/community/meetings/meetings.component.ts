import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/model/user.model';
import { SessionService } from '../../../shared/services/session.service';
import { MeetingsService } from '../../../shared/services/meetings.service';
import { Meeting } from '../../../shared/model/meeting.model';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html'
})
export class MeetingsComponent implements OnInit {
  user: User = this.sessionService.user;
  activeMeeting: Meeting = new Meeting();
  closestMeeting: Meeting = new Meeting();

  constructor(
    private sessionService: SessionService,
    private meetingsService: MeetingsService) {}

  ngOnInit() {
    this.meetingsService.getActive().subscribe( (meeting) => this.activeMeeting = meeting);
    this.meetingsService.getClosest().subscribe( (meeting) => this.closestMeeting = meeting);
  }

}
