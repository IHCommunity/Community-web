import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Message } from '../model/message.model';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Message>;
  public chats: Message[] = [];

  constructor(private afs: AngularFirestore) { }

  loadMessajes() {
      this.itemsCollection = this.afs.collection<Message>('chats');
      return this.itemsCollection.valueChanges().map( (messages: Message[]) => {
          this.chats = messages;
      } );
  }

  addMessage(text: string) {
      // Falta el userId
      let message: Message = {
          userName: 'Marco',
          body: text,
          date: new Date().getTime()
      }

      return this.itemsCollection.add( message );
  }

}
