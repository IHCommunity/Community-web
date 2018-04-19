import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../shared/services/session.service';
import { User } from '../../../shared/model/user.model';
import { UsersService } from '../../../shared/services/users.service';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  currentUser: User = this.sessionService.user;
  user: User = new User();
  latchVisible: Boolean = false;
  latchForm;
  code: string;
  apiError: string;

  constructor(
    private sessionService: SessionService,
    private routes: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe( params => {
        this.usersService.get(params['id']).subscribe( user => this.user = user );
      });

    this.latchForm = new FormGroup({
      code: new FormControl('', Validators.required)
    });
  }

  toggleLatch() {
    this.latchVisible = !this.latchVisible;
  }

  pair(latchForm: NgForm) {
    this.usersService.pair(this.code, this.user).subscribe(
      (user) => {
        this.latchForm.reset();
        this.latchVisible = false;
        this.user.paired = true;
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}
