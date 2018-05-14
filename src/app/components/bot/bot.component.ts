import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { BotService, Msg } from '../../shared/services/bot.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { SessionService } from '../../shared/services/session.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit, AfterViewChecked {
  message: string;
  messages: Observable<Msg[]>;
  messageDiv: any;

  constructor(private bot: BotService,
              private sessionService: SessionService) {}

  ngOnInit() {
      this.messageDiv = document.querySelector('html');
      this.messages = this.bot.conversation.asObservable()
        .scan((acc, val) => {
            return acc.concat(val);
        });
  }

  ngAfterViewChecked() {
      this.messageDiv.scrollTop = this.messageDiv.scrollHeight;
  }

  sendMessage() {
      if ( this.message.length === 0 ) {
          return;
      }
      this.bot.talk(this.message);
      this.message = '';
  }

}
