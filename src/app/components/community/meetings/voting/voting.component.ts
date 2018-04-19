import { Component, OnInit } from '@angular/core';
import { MeetingsService } from '../../../../shared/services/meetings.service';
import { Meeting } from '../../../../shared/model/meeting.model';
import { Agreement } from '../../../../shared/model/agreement.model';
import { AgreementsService } from '../../../../shared/services/agreements.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html'
})
export class VotingComponent implements OnInit {
  meeting: Meeting = new Meeting();

  constructor(
    private agreementsService: AgreementsService,
    private meetingsService: MeetingsService) { }

  ngOnInit() {
    this.meetingsService.getActive().subscribe( (meeting) => this.meeting = meeting);
  }

  agree(agreement: Agreement) {
    return this.agreementsService.calculateAgreeWidth(agreement);
  }

  disagree(agreement: Agreement) {
    return this.agreementsService.calculateDisagreeWidth(agreement);
  }

}
