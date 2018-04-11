import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../shared/services/session.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html'
})
export class MyHomeComponent implements OnInit {

  constructor(
    private router: Router,
    private sessionService: SessionService) { }

  ngOnInit() {
  }

  onClickLogout() {
    this.sessionService.logout()
      .subscribe( () => {
        this.router.navigate(['/login']);
      });
  }

}
