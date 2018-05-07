import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsersProvider } from '../../providers/users/users';
/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  inputChannelId: any;
  email1:any;
  password1:any;
  errorMessage:string;
  //UCfz57R6AZD9s1ppk_LftLQw
  constructor(public afAuth: AngularFireAuth, public usersProvider: UsersProvider, public navCtrl: NavController, public navParams: NavParams, public events: Events, public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }


  // buttonClicked(){
  //   console.log(this.inputChannelId);
  //   this.events.publish('channelId:changed', {'channelId': this.inputChannelId });
  //   this.navCtrl.setRoot(HomePage, {channelId: this.inputChannelId});
  // }

  async signIn(email, password) {
    try {
      var self = this;
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      var uid = result.uid;
      this.usersProvider.getUser(uid).then((doc) => {
        var dataReturned = doc.data();
        var data = {
          channelId: dataReturned.ChannelID
        }
        self.events.publish('channelId:changed', {'channelId': dataReturned.ChannelID });
        self.navCtrl.setRoot(HomePage, {channelId: dataReturned.ChannelID});
      });
    } catch (e) {
      this.errorMessage = e.message;
      console.error(e.message);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }




}
