import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { SessionService } from './session.service';

import { ApiAiClient } from 'api-ai-javascript';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Msg {
    constructor(public content: string, public sentBy: string) {}
}

@Injectable()
export class BotService {
    readonly token = environment.firebase.dialogFlowClientAccessToken;
    readonly client = new ApiAiClient({ accessToken: this.token });
    conversation = new BehaviorSubject<Msg[]>([]);

    constructor(private sessionService: SessionService) { }

    update(message: Msg) {
        this.conversation.next([message]);
    }

    talk(msg: string) {
        const userMessage = new Msg(msg, this.sessionService.user.name);
        this.update(userMessage);

        this.client.textRequest(msg)
            .then(res => {
                const botMessage = new Msg(res.result.fulfillment.speech, 'bot');
                this.update(botMessage);
            })
    }
}
