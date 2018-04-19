import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../shared/model/payment.model';
import { PaymentsService } from '../../../shared/services/payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments: Array<Payment> = [];

  constructor( private paymentsService: PaymentsService ) { }

  ngOnInit() {
    this.paymentsService.list().
        subscribe( (payments) => this.payments = payments);
  }

}
