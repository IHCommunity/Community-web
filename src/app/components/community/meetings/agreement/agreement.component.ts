import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgreementsService } from '../../../../shared/services/agreements.service';
import { Agreement } from '../../../../shared/model/agreement.model';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html'
})
export class AgreementComponent implements OnInit {
  agreement: Agreement = new Agreement();
  disagreeWidth = '0%';
  agreeWidth = '0%';

  constructor(
    private routes: ActivatedRoute,
    private agreementsService: AgreementsService
  ) {}

  ngOnInit() {
    this.routes
      .params
      .subscribe( params => {
        this.agreementsService.get(params['id']).subscribe( agreement => this.agreement = agreement );
      });
    setTimeout(() => {
      this.agree();
      this.disagree();
    }, 500);
  }

  agree() {
    this.disagreeWidth = this.agreementsService.calculateAgreeWidth(this.agreement);
  }

  disagree() {
    this.agreeWidth = this.agreementsService.calculateDisagreeWidth(this.agreement);
  }
}
