import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/model/user.model';
import { UsersService } from '../../../shared/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html'
})
export class FormProfileComponent implements OnInit {
  user: User = new User();
  profileForm: FormGroup;
  apiError: string;

  constructor(
    private routes: ActivatedRoute,
    private router: Router,
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

  updateProfile(form: NgForm): void {
    this.usersService.edit(this.user).subscribe(
      (user) => {
        this.profileForm.reset();
        this.router.navigate(['/home', 'profile', this.user.id]);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}
