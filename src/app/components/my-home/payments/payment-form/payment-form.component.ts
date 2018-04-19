import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Payment } from '../../../../shared/model/payment.model';
import { PaymentsService } from '../../../../shared/services/payments.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html'
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  payment: Payment = new Payment();
  apiError: string;

  constructor(
    private router: Router,
    private paymentsService: PaymentsService
  ) { }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  createPayment(form: NgForm): void {
    this.paymentsService.create(this.payment).subscribe(
      (payment) => {
        this.paymentForm.reset();
        this.router.navigate(['/home', 'payments']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}
