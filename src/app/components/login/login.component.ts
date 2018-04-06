import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SessionService } from '../../shared/services/session.service';
import { User } from '../../shared/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: User = new User();
  loginForm: FormGroup;

  apiError: string;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {
    this.loginForm =  new FormGroup({
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
        ]
      ),
      password: new FormControl('', Validators.required ),
    });
  }

  doLogin(loginForm: NgForm) {
    this.sessionService.authenticate(this.user).subscribe(
      (user) => {
        loginForm.reset();
        this.router.navigate(['/news']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}
