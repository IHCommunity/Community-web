import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ChatService } from '../../../shared/services/chat.service';
import { UsersService } from '../../../shared/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
    message: string = "";
    element: any;
    receptorId: string;

  constructor(public _cs: ChatService, private routes: ActivatedRoute, private usersService: UsersService) {
      // this._cs.loadMessajes().subscribe(() => {
      //     setTimeout(() => {
      //         this.element.scrollTop = this.element.scrollHeight;
      //     }, 20);
      // });

      this.routes.params.subscribe(params => {
          this.receptorId = params.id;
      })
  }

  ngOnInit() {
      this.element = document.getElementById('messages');
  }

  // sendMessage() {
  //
  //     if( this.message.length === 0 ) {
  //         return;
  //     }
  //
  //     this._cs.addMessage(this.message, this.receptorId)
  //             .then(() => this.message = "")
  //             .catch((err) => console.error('Error sending message', err));
  // }
}
