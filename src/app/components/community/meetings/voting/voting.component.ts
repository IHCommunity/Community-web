import { Component, OnInit } from '@angular/core';
import { MeetingsService } from '../../../../shared/services/meetings.service';
import { Meeting } from '../../../../shared/model/meeting.model';
import { Agreement } from '../../../../shared/model/agreement.model';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html'
})
export class VotingComponent implements OnInit {
  meeting: Meeting = new Meeting();

  constructor(private meetingsService: MeetingsService) { }

  ngOnInit() {
    this.meetingsService.getActive().subscribe( (meeting) => this.meeting = meeting);
  }

  agree(agreement: Agreement) {
    return this.meetingsService.calculateAgreeWidth(agreement);
  }

  disagree(agreement: Agreement) {
    return this.meetingsService.calculateDisagreeWidth(agreement);
  }

}
