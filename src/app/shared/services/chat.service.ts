import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { SessionService } from './session.service';

import { Message } from '../model/message.model';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore, private sessionService: SessionService) {}

}
