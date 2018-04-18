import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-positive-feedback',
  templateUrl: './positive-feedback.component.html'
})
export class PositiveFeedbackComponent implements OnInit {
  feedback: String = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.feedback = this.route.snapshot.data['feedback'];
    console.log(this.feedback);
  }

}
