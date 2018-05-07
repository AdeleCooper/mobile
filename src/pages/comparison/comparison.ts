import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {YoutubeProvider} from '../../providers/youtube/youtube';
import {Observable} from 'rxjs/Observable';

/**
 * Generated class for the ComparisonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comparison',
  templateUrl: 'comparison.html',
})
export class ComparisonPage {
  channelId: any;
  videos: Observable<any[]>;
  video: Observable<any>;
  videoList: any = [];
  videoData: any = [];
  thumbnails: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public youtubeProvider: YoutubeProvider) {
    this.channelId = this.navParams.get('channelId');
    this.getRecentVideos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComparisonPage');
  }
  getRecentVideos(){
    this.videos = this.youtubeProvider.getRecentVideos(this.channelId);
    this.videos.subscribe(data => {
     console.log('data: ',data);
     this.videoList.push(data[0]);
     this.videoList.push(data[1]);
     console.log(this.videoList);
     this.videoList.forEach(element => {
       this.getVideoStats(element.id.videoId);
     });
     
   },err => {
     console.log("ERROR!!!");
   })
  }

  getVideoStats(videoId){
    var self = this;
    this.video = this.youtubeProvider.getVideoStats(videoId);
    this.video.subscribe(data => {
      console.log("data: ", data[0].snippet.thumbnails.high.url);
      this.videoData.push(data[0]);
      this.thumbnails.push(data[0].snippet.thumbnails.high.url);
      console.log(this.videoData);
    },err => {
      console.log("ERROR!!!");
    })
  }




}
