import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { Meeting } from '../../../../shared/model/meeting.model';
import { MeetingsService } from '../../../../shared/services/meetings.service';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html'
})
export class MeetingFormComponent implements OnInit, AfterViewInit {
  meeting: Meeting = new Meeting();
  meetingForm;

  apiError: string;

  constructor(
    private meetingsService: MeetingsService,
    private router: Router
  ) {  }

  ngOnInit() {
    this.meetingForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      startDate: new FormControl(),
      deadLine: new FormControl()
    });
  }

  ngAfterViewInit() {
    const date = document.querySelectorAll('.datepicker');
    const dateInstance = M.Datepicker.init(date, ({ format: 'yyyy-mm-dd'}));
    const time = document.querySelectorAll('.timepicker');
    const timeInstance = M.Timepicker.init(time, ({ twelveHour: false }));
  }

  createMeeting(form: NgForm) {
    let startDate: any = document.getElementById('startdate');
    const startTime: any = document.getElementById('start-time');

    let deadline: any = document.getElementById('deadline');
    const deadlineTime: any = document.getElementById('deadline-time');

    if (startDate.value && deadline.value) {
      startTime.value = !startTime.value ? '23:59' : startTime.value;
      deadlineTime.value = !deadlineTime.value ? '23:59' : deadlineTime.value;

      startDate = `${startDate.value}T${startTime.value}:00.810`;
      deadline = `${deadline.value}T${deadlineTime.value}:00.810`;

      this.meeting.startDate = new Date(startDate);
      this.meeting.deadLine = new Date(deadline);
    }

    if (!this.meeting.startDate || !this.meeting.deadLine) {
      this.apiError = 'Error';
    } else {
      this.meetingsService.create(this.meeting).subscribe(
        (meeting) => {
          form.reset();
          this.router.navigate(['/community', 'meetings', 'new', meeting.id, 'agreements']);
        },
        (error) => {
          this.apiError = error.message;
        }
      );
    }
  }
}
