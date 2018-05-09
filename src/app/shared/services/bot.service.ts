import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

import { ApiAiClient } from 'api-ai-javascript';

@Injectable()
export class BotService {
    readonly token = environment.firebase.dialogFlowClientAccessToken;
    readonly client = new ApiAiClient({ accessToken: this.token });

    constructor() { }

    talk() {
        this.client.textRequest('Who are you?')
            .then(res => console.log(res.result.fulfillment.speech));
    }
}
