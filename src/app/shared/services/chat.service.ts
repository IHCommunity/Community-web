import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { SessionService } from './session.service';

import { Message } from '../model/message.model';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Message>;
  chats: Message[] = [];

  constructor(private afs: AngularFirestore, private sessionService: SessionService) {}

  loadMessajes() {
      this.itemsCollection = this.afs.collection<Message>('chats', ref => ref.orderBy('date', 'desc').limit(20));

      return this.itemsCollection.valueChanges()
                                 .map(messages => {
                                     this.chats = [];

                                     for(let msg of messages) {
                                         this.chats.unshift(msg);
                                     }
                                     return this.chats;
                                 })
  }

  addMessage(text: string, id: string) {
      const message = {
          senderId: this.sessionService.user.id,
          receiverId: id,
          userName: this.sessionService.user.name,
          body: text,
          date: new Date().getTime()
      }

      return this.itemsCollection.add(message);
  }
}
