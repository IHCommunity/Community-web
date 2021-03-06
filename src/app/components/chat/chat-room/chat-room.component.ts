import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ChatService } from '../../../shared/services/chat.service';
import { UsersService } from '../../../shared/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../shared/services/session.service';
import { User } from '../../../shared/model/user.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, AfterViewChecked {
    message = '';
    element: any;
    receptorId: string;
    userReceptor: User = new User();

  constructor(private sessionService: SessionService,
              public _cs: ChatService,
              private routes: ActivatedRoute,
              private usersService: UsersService) {

      this.routes.params.subscribe(params => {
          this.receptorId = params.id;
      });

      this._cs.loadMessajes(this.receptorId).subscribe(() => {
          setTimeout(() => {
              this.element.scrollTop = this.element.scrollHeight;
          }, 20);
      });
  }

  ngOnInit() {
      this.element = document.querySelector('html');
      this.usersService.get(this.receptorId).subscribe( user => this.userReceptor = user );
  }

  ngAfterViewChecked() {
      this.element.scrollTop = this.element.scrollHeight;
  }

  sendMessage() {

      if ( this.message.length === 0 ) {
          return;
      }

      let sendingMsg = this.message;
      this.message = '';

      this._cs.addMessage(sendingMsg, this.receptorId)
              .then(() => sendingMsg = '')
              .catch((err) => console.error('Error sending message', err));
  }
}
