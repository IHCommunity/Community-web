import { NewsService } from './../../../../shared/services/news.service';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Notice } from './../../../../shared/model/notice.model';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-proposals-form',
  templateUrl: './proposals-form.component.html'
})
export class ProposalsFormComponent implements OnInit, AfterViewInit {
  notice: Notice = new Notice();
  noticeForm: FormGroup;
  types = ['good', 'info', 'alert', 'danger', 'neutral'];

  apiError: string;


  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.noticeForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      deadline: new FormControl(''),
      type: new FormControl()
    });
  }

  ngAfterViewInit() {
      const date = document.querySelector('.datepicker');
      const dateInstance = M.Datepicker.init(date, ({ format: 'yyyy-mm-dd'}));
      const time = document.querySelector('.timepicker');
      const timeInstance = M.Timepicker.init(time, ({ twelveHour: false }));
      const elem = document.querySelector('select');
      const instance = M.FormSelect.init(elem);
  }

  createNotice(noticeForm: NgForm) {
    // Deadline value, we can not set it because of materializecss
    let deadline: any = document.getElementById('deadline');
    const time: any = document.getElementById('time');
    if (deadline.value) {
      time.value = !time.value ? '23:59' : '';
      deadline = `${deadline.value}T${time.value}:00.810`;
      this.notice.deadline = new Date(deadline);
    }

    if (!this.notice.deadline) {
      this.apiError = 'Error';
    } else {
      this.newsService.create(this.notice).subscribe(
        (notice) => {
          noticeForm.reset();
          this.router.navigate(['/news']);
        },
        (error) => {
          this.apiError = error.message;
        }
      );
    }
  }

}
