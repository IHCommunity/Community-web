import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user.model';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  user: User = new User();
  signupForm: FormGroup;

  apiError: string;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.minLength(9)),
      apt: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', [ Validators.required, this.samePassword.bind( this ) ])
    });
  }

  doSignup(form: NgForm): void {
    this.usersService.create(this.user).subscribe(
      (user) => {
        form.reset();
        this.router.navigate(['/login']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

  samePassword(control: FormControl): { [s: string]: boolean } {

    if (control.value !== this.user.password) {
      return { differentPasswords: true };
    }

    return null;

  }

}
