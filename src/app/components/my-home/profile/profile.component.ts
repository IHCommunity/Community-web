import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/model/user.model';
import { UsersService } from '../../../shared/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  profileForm: FormGroup;
  apiError: string;

  constructor(
    private routes: ActivatedRoute,
    private usersService: UsersService) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe( params => {
        this.usersService.get(params['id']).subscribe( user => this.user = user );
      });

    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.minLength(9)),
      apt: new FormControl('', Validators.required)
    });
  }

}
