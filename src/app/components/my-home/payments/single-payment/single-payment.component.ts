import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../../shared/model/payment.model';
import { PaymentsService } from '../../../../shared/services/payments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-payment',
  templateUrl: './single-payment.component.html',
  styleUrls: ['./single-payment.component.css']
})
export class SinglePaymentComponent implements OnInit {
  payment: Payment = new Payment();

  constructor(
      private routes: ActivatedRoute,
      private paymentsService: PaymentsService) { }

  ngOnInit() {
      this.routes
        .params
        .subscribe( params => {
          this.paymentsService.get(params['id']).subscribe( payment => this.payment = payment );
        });
    }
}
