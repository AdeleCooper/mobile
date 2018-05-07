import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComparisonPage } from '../pages/comparison/comparison';
import { EditIdeasPage } from '../pages/edit-ideas/edit-ideas';
import { StartPage } from '../pages/start/start';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import firebase from "firebase";
import { IdeasProvider } from '../providers/ideas/ideas';
import { YoutubeProvider } from '../providers/youtube/youtube';
import { UsersProvider } from '../providers/users/users';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDFdrHHjLF_AHVxaZ7B9YysJrq4F07-c7U",
    authDomain: "app-5c416.firebaseapp.com",
    databaseURL: "https://app-5c416.firebaseio.com",
    projectId: "app-5c416",
    storageBucket: "app-5c416.appspot.com",
    messagingSenderId: "128332494116"
  };
  firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ComparisonPage,
    EditIdeasPage,
    StartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ComparisonPage,
    EditIdeasPage,
    StartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IdeasProvider,
    YoutubeProvider,
    UsersProvider
  ]
})
export class AppModule {}
