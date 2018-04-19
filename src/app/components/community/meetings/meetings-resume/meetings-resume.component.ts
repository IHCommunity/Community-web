import { MeetingsService } from './../../../../shared/services/meetings.service';
import { Meeting } from './../../../../shared/model/meeting.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings-resume',
  templateUrl: './meetings-resume.component.html'
})
export class MeetingsResumeComponent implements OnInit {
  meetings: Array<Meeting> = [];

  constructor(private meetingsService: MeetingsService) { }

  ngOnInit() {
    this.meetingsService.listResume().subscribe( meetings => this.meetings = meetings );
  }

}
