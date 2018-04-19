import { Observable } from 'rxjs/Rx';
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
  signupForm;

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
      email: new FormControl('', [Validators.email, Validators.required], this.emailInUse.bind( this )),
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
      return { passwords: true };
    }

    return null;

  }

  emailInUse(control: FormControl): Promise<any> | Observable <any> {
    console.log('hola');
    console.log(this.signupForm.get('email'));
    let emailFromBack;

    this.usersService.checkEmail({email: control.value}).subscribe(
      (response) => {
        emailFromBack = response;
      }
    );

    const emailPromise = new Promise( (resolve, reject) => {

      setTimeout(() => {
        if ( control.value === emailFromBack ) {
          resolve( {exists: true} );
        } else {
          resolve( null );
        }
      }, 1500);
    });

    return emailPromise;
  }

}
