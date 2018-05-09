import { Component, OnInit } from '@angular/core';
import { BotService } from '../../shared/services/bot.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  constructor(private bot: BotService) { }

  ngOnInit() {
      this.bot.talk();
  }

}
