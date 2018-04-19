import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user.model';
import { UsersService } from '../../shared/services/users.service';
import { SessionService } from '../../shared/services/session.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user: User = this.sessionService.user;
  users: Array<User> = [];

  constructor(
      private sessionService: SessionService,
      private usersService: UsersService
  ) { }

  ngOnInit() {
      this.usersService.list()
        .subscribe( (users) => {
            this.users = users.filter((user) => user.id !== this.user.id);
        });
  }

}
