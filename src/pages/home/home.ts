import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IdeasProvider} from '../../providers/ideas/ideas';
import {YoutubeProvider} from '../../providers/youtube/youtube';
import {Observable} from 'rxjs/Observable';

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

  constructor(public ideasProvider: IdeasProvider, public youtubeProvider: YoutubeProvider, public navCtrl: NavController, public navParams: NavParams) {
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
    this.channel = this.youtubeProvider.getChannel(this.channelId);
    this.channel.subscribe(data => {
      console.log('data: ',data);
    },err => {
      console.log("ERROR!!!");
    }
  )
  }

  // getRecentVideos(){
  //   this.videos = this.youtubeProvider.getRecentVideos(this.channelId);
  //   this.videos.subscribe(data => {
  //    console.log('data: ',data);
  //    this.videoList.push(data[0]);
  //    this.videoList.push(data[1]);
  //    console.log(this.videoList);
  //    this.videoList.forEach(element => {
  //      this.getVideoStats(element.id.videoId);
  //    });
     
  //  },err => {
  //    console.log("ERROR!!!");
  //  })
  // }


  // getVideoStats(videoId){
  //   this.video = this.youtubeProvider.getVideoStats(videoId);
  //   this.video.subscribe(data => {
  //     console.log("data: ", data[0].snippet.thumbnails.high.url);
  //   },err => {
  //     console.log("ERROR!!!");
  //   })
  // }

}
