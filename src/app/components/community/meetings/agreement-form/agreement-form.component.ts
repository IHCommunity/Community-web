import { ActivatedRoute } from '@angular/router';
import { AgreementsService } from './../../../../shared/services/agreements.service';
import { Agreement } from './../../../../shared/model/agreement.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agreement-form',
  templateUrl: './agreement-form.component.html'
})
export class AgreementFormComponent implements OnInit {
  agreement: Agreement = new Agreement();
  agreementForm: FormGroup;
  meetingId: string;

  created: Boolean = false;

  apiError: string;

  constructor(
    private agreementsService: AgreementsService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe( params => this.meetingId = params.id);

    this.agreementForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  createAgreement(form: NgForm) {
    this.agreementsService.create(this.meetingId, this.agreement).subscribe(
      (meeting) => {
        form.reset();
        this.created = true;
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}
