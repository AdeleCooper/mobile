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

  // getIdeas1(): Promise<any> {
  //     return new Promise((resolve, reject) => {
  //       this.db
  //         .collection("Ideas")
  //         .doc("GhZseUZwOh0TC6dboJ9g")
  //         .get()
  //         .then((doc: any) => {
  //           if (doc.exists) {
  //             resolve(doc);
  //             console.log(doc.data());
  //           } else {
  //             reject("Task doesn't exist");
  //           }
  //         })
  //         .catch((error: any) => {
  //           console.log(error);
  //           reject(error);
  //         });
  //     });
  // }

  getIdeas(uid): Promise<any> {
    return new Promise((resolve, reject) => {
      var ideas = [];
      this.db
        .collection("Users")
        .doc(uid)
        .collection("Ideas")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              ideas.push({ideaID: doc.id, idea: doc.data()});
          });
          resolve(ideas);
      })
        .catch((error: any) => {
          console.log(error);
          reject(error);
        });
    });
}


  addIdea(data, uid): Promise<any> {
    return new Promise((resolve, reject) => {
      JSON.stringify(data);
      // Adds new idea to Ideas collection
      this.db.collection("Users").doc(uid).collection("Ideas").add(data)
        .then(function (docRef) {
          console.log(docRef.id);
          resolve(docRef);
        })
        .catch((error: any) => {
          reject(error);
        });

    });
  }

  editIdea(data, uid, ideaID): Promise<any> {
    return new Promise((resolve, reject) => {
      JSON.stringify(data);
      // Adds new idea to Ideas collection
      this.db.collection("Users").doc(uid).collection("Ideas").doc(ideaID).set(data)
        .then(function () {
          resolve();
        })
        .catch((error: any) => {
          reject(error);
        });

    });
  }



}
