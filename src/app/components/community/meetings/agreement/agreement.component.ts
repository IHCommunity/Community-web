import { User } from './../../../../shared/model/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgreementsService } from '../../../../shared/services/agreements.service';
import { Agreement } from '../../../../shared/model/agreement.model';
import { MeetingsService } from '../../../../shared/services/meetings.service';
import { SessionService } from '../../../../shared/services/session.service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html'
})
export class AgreementComponent implements OnInit {
  agreement: Agreement = new Agreement();
  disagreeWidth = '0%';
  agreeWidth = '0%';
  deadLineTime;
  user: User = this.sessionService.user;
  agreeBol = false;
  disagreeBol = false;
  agreeVotersList: Boolean = false;
  disagreeVotersList: Boolean = false;
  agreeVoters: Array<string> = [];
  disagreeVoters: Array<string> = [];

  constructor(
    private routes: ActivatedRoute,
    private sessionService: SessionService,
    private agreementsService: AgreementsService,
    private meetingsService: MeetingsService
  ) {}

  ngOnInit() {
    this.routes
      .params
      .subscribe( params => {
        this.agreementsService.get(params['id']).subscribe( agreement => {
          this.agreement = agreement;
          this.agreeVoters = this.agreement.agree.map(user => {
            return `${user.apt} - ${user.name} ${user.surname}`;
          });
          this.disagreeVoters = this.agreement.disagree.map(user => {
            return `${user.apt} - ${user.name} ${user.surname}`;
          });
        });
      });

    setTimeout(() => {
      this.agree();
      this.disagree();
      this.deadLineTime = this.meetingsService.getDeadlineTime(this.agreement);
      this.checkIfAgree();
      this.checkIfDisagree();

      setInterval(() => {
        this.deadLineTime = this.meetingsService.getDeadlineTime(this.agreement);
      }, 60 * 1000);
    }, 300);
  }

  agree() {
    this.agreeWidth = this.agreementsService.calculateAgreeWidth(this.agreement);
  }

  disagree() {
    this.disagreeWidth = this.agreementsService.calculateDisagreeWidth(this.agreement);
  }

  vote(accept: boolean) {
    this.agreementsService.vote(this.agreement, accept).subscribe(agreement => {
      this.agreement = agreement;
      if (accept) {
        this.agreeBol = true;
        this.disagreeBol = false;
      } else {
        this.disagreeBol = true;
        this.agreeBol = false;
      }
      this.agree();
      this.disagree();
    });
  }

  checkIfAgree() {
    if (this.agreement.agree.some( user => user.id === this.user.id )) {
      this.disagreeBol = false;
      this.agreeBol = true;
    }
  }
  checkIfDisagree() {
    if (this.agreement.disagree.some( user => user.id === this.user.id )) {
      this.disagreeBol = true;
      this.agreeBol = false;
    }
  }

  checkIfBigger(width: string) {
    return parseInt(width, 10) > 30;
  }

  showAgreeVoters(): void {
    this.agreeVotersList = !this.agreeVotersList;

    this.disagreeVotersList = this.disagreeVotersList ? false : false;
  }

  showDisagreeVoters(): void {
    this.disagreeVotersList = !this.disagreeVotersList;

    this.agreeVotersList = this.agreeVotersList ? false : false;
  }
}
