import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { BotService, Msg } from '../../shared/services/bot.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { SessionService } from '../../shared/services/session.service';
declare var M: any;

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit, AfterViewChecked {
  message: string;
  messages: Observable<Msg[]>;
  messageDiv: any;
  dropdownIsActive: Boolean = false;
  intents: Array<string> = [
    "info",
    "getnews",
    "publish",
    "payments",
    "meeting",
    "jokes",
    "swim",
    "paddle",
    "admin",
    "admin",
    "hello",
    "birthday",
    "girlfriend",
    "parents",
    "name",
    "gender",
    "techs",
    "status",
    "duty",
    "hobbies"
  ];

  constructor(private bot: BotService,
              private sessionService: SessionService) {}

  ngOnInit() {
      this.messageDiv = document.querySelector('html');
      this.messages = this.bot.conversation.asObservable()
        .scan((acc, val) => {
            return acc.concat(val);
        });

      let elems = document.querySelectorAll('.dropdown-trigger');
      let instances = M.Dropdown.init(elems);
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

  closeDropdown(event) {
    if(this.dropdownIsActive) {
      let instances = M.Dropdown.close();
      this.dropdownIsActive = false;
    }
  }

  setVisible() {
    this.dropdownIsActive = true;
  }

  sendCustomMessage(message) {
    this.message = message;
    this.bot.talk(message);
    this.message = '';
  }

}
