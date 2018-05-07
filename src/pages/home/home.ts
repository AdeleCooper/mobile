import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import {IdeasProvider} from '../../providers/ideas/ideas';
import {YoutubeProvider} from '../../providers/youtube/youtube';
import {Observable} from 'rxjs/Observable';
import { EditIdeasPage } from '../edit-ideas/edit-ideas';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  channel: Observable<any>;
  channelId: any;
  title: any;
  profilePicture = "https://www.impactnyc.org/wp-content/uploads/2018/02/missing-image-avatar.png";
  subscriberCount: any;
  videoCount: any;
  viewCount: any;

  constructor(public ideasProvider: IdeasProvider, public youtubeProvider: YoutubeProvider, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.channelId = this.navParams.get('channelId');
    this.getIdeas();
    this.getChannelStats();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getIdeas(){
    this.ideasProvider.getIdeas();
  }

  getChannelStats(){
    var self = this;
    this.channel = this.youtubeProvider.getChannel(this.channelId);
    this.channel.subscribe(data => {
      console.log('data: ',data);
      self.title = data[0].snippet.title;
      self.profilePicture = data[0].snippet.thumbnails.high.url;
      self.subscriberCount = data[0].statistics.subscriberCount;
      self.videoCount = data[0].statistics.videoCount;
      self.viewCount = data[0].statistics.viewCount;
    },err => {
      console.log("ERROR!!!");
    }
  )
  }

  addIdea(): void{
      let modal = this.modalCtrl.create(EditIdeasPage);
      var self = this;

      modal.onDidDismiss(data => {
        console.log("close modal");
      })
      modal.present();
  }

}
