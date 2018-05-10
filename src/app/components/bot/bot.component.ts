import { Component, OnInit } from '@angular/core';
import { BotService, Msg } from '../../shared/services/bot.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { SessionService } from '../../shared/services/session.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {
  message: string = '';
  messages: Observable<Msg[]>;

  constructor(private bot: BotService,
              private sessionService: SessionService) { }

  ngOnInit() {
      this.messages = this.bot.conversation.asObservable()
        .scan((acc, val) => acc.concat(val))
  }

  sendMessage() {
      if ( this.message.length === 0 ) {
          return;
      }
      this.bot.talk(this.message);
      this.message = '';
  }

}
