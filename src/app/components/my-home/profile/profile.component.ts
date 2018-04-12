import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../shared/services/session.service';
import { User } from '../../../shared/model/user.model';
import { UsersService } from '../../../shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  currentUser: User = this.sessionService.user;
  user: User = new User();

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
  }

}
