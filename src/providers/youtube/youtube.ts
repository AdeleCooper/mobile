import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the YoutubeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YoutubeProvider {
  apiKey = 'AIzaSyD0mIPhg5Wp_kMsohjafyY9O20K97ZXR-g';

  constructor(public http: Http) {
    console.log('Hello YoutubeProvider Provider');
  }

  getVideoStats(videoId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id='
      + videoId + '&key=' + this.apiKey).map(res => {
        return res.json()['items'];
      })
  }

  getRecentVideos(channelId){
    return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='
      + channelId + '&maxResults=2&order=date&type=video&key=' + this.apiKey).map(res => {
        return res.json()['items'];
      })
  }

  getChannel(channelId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id='
      + channelId + '&key=' + this.apiKey).map(res => {
        return res.json()['items'];
      })

  }

}
