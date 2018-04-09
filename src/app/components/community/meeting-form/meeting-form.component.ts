import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl } from '@angular/forms';
import { Meeting } from '../../../shared/model/meeting.model';
import { MeetingsService } from '../../../shared/services/meetings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html'
})
export class MeetingFormComponent implements OnInit {
  meeting: Meeting = new Meeting();
  meetingForm: FormGroup;

  apiError: string;

  constructor(
    private meetingsService: MeetingsService,
    private router: Router
  ) {
    this.meetingForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      startDate: new FormControl(),
      deadLine: new FormControl()
    });
  }

  ngOnInit() {
  }

  createMeeting(form: NgForm) {
    this.meetingsService.create(this.meeting).subscribe(
      (user) => {
        form.reset();
        this.router.navigate(['/news']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }
}
