import { Agreement } from './../../../../shared/model/agreement.model';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from './../../../../shared/model/meeting.model';
import { MeetingsService } from './../../../../shared/services/meetings.service';
import { Component, OnInit } from '@angular/core';
import { AgreementsService } from '../../../../shared/services/agreements.service';

@Component({
  selector: 'app-meeting-item',
  templateUrl: './meeting-item.component.html'
})
export class MeetingItemComponent implements OnInit {
  meeting: Meeting = new Meeting();
  agreeWidths: Array<string> = [];
  disagreeWidths: Array<string> = [];

  constructor(
    private routes: ActivatedRoute,
    private agreementsService: AgreementsService,
    private meetingsService: MeetingsService) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe( params => {
        this.meetingsService.get(params['id']).subscribe( meeting => {
          this.meeting = meeting;
          setTimeout(() => {
            this.meeting.agreements.forEach( agreement => {
              this.agreeWidths.push(this.agree(agreement));
              this.disagreeWidths.push(this.disagree(agreement));
            });
          }, 300);
        });
      });
    setTimeout(() => {
      console.log(this.meeting);
    }, 500);
  }

  agree(agreement: Agreement): string {
    return this.agreementsService.calculateAgreeWidth(agreement);
  }

  disagree(agreement: Agreement): string {
    return this.agreementsService.calculateDisagreeWidth(agreement);
  }

}
