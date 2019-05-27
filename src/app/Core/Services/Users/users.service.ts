import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {User} from '../../Users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
}

  createUser(user: User){
    return this.firestore.collection('users').add(user);
  }

  updateUser(user: User){
    delete user.id;
    this.firestore.doc('users/' + user.id).update(user);
}
  deleteUser(userId: string){
    this.firestore.doc('users/' + userId).delete();
  }
}
