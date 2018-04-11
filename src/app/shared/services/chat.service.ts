import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: any[] = [];

  constructor(private afs: AngularFirestore) { }

  loadMessajes() {
      this.itemsCollection = this.afs.collection<any>('chats');
      return this.itemsCollection.valueChanges();
  }

}
