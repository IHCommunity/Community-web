import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { SessionService } from './session.service';

import { Message } from '../model/message.model';
import { Room } from '../model/room.model';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Room>;
  rooms: Room[] = [];
  singleRoom: Room;


  constructor(private afs: AngularFirestore, private sessionService: SessionService) {}

  listRooms() {
      this.itemsCollection = this.afs.collection<Room>('chats');
      return this.itemsCollection.valueChanges().map( (rooms: Room[]) => {
          this.rooms = rooms.filter(room => {
              return room.users.includes(this.sessionService.user.id);
          });
      } );
  }

  getRoom(id: string) {
      this.itemsCollection = this.afs.collection<Room>('chats');
      return this.itemsCollection.valueChanges().map( (rooms: Room[]) => {
          this.singleRoom = rooms.find(room => {
              if (room.users.includes(this.sessionService.user.id) && room.users.includes(id)) {
                  return true;
              } else {
                  return false;
              }
          });
      } );
  }

  addRoom(id: string) {
      this.itemsCollection = this.afs.collection<Room>('chats');
      let room: Room = {
          users: [
              id,
              this.sessionService.user.id
          ],
          messages: []
      }

      return this.itemsCollection.add( room );
  }

}
