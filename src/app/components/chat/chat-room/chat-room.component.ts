import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ChatService } from '../../../shared/services/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
    message: string = "";
    element: any;

  constructor(public _cs: ChatService) {
      this._cs.loadMessajes().subscribe(() => {
          setTimeout(() => {
              this.element.scrollTop = this.element.scrollHeight;
          }, 20);
      });
  }

  ngOnInit() {
      this.element = document.getElementById('messages');
  }

  sendMessage() {
      console.log(this.message);

      if( this.message.length === 0 ) {
          return;
      }

      this._cs.addMessage(this.message)
              .then(() => this.message = "")
              .catch((err) => console.error('Error sending message', err));
  }
}
