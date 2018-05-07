//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase/firestore';

/*
  Generated class for the IdeasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IdeasProvider {
  db: any;

  constructor() {
    console.log('Hello IdeasProvider Provider');
    this.db = firebase.firestore();
  }

  getIdeas(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.db
          .collection("Ideas")
          .doc("GhZseUZwOh0TC6dboJ9g")
          .get()
          .then((doc: any) => {
            if (doc.exists) {
              resolve(doc);
              console.log(doc.data());
            } else {
              reject("Task doesn't exist");
            }
          })
          .catch((error: any) => {
            console.log(error);
            reject(error);
          });
      });
  }


}
