import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComparisonPage } from '../pages/comparison/comparison';
import { EditIdeasPage } from '../pages/edit-ideas/edit-ideas';
import { StartPage } from '../pages/start/start';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  channelId: any;
  rootPage: any = StartPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public events: Events, public afAuth: AngularFireAuth) {
    this.initializeApp();
    var self = this;
    this.events.subscribe('channelId:changed', (data) => {
      self.channelId = data.channelId;
    });


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Compare', component: ComparisonPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    this.nav.setRoot(page.component, {channelId: this.channelId});
  }

  logOut() {
    var self = this;
    this.afAuth.auth.signOut().then(function () {
      // Sign-out successful.
      self.nav.setRoot(StartPage);
    }, function (error) {
      console.log("Log out error: " + error);
    });
  }
}
