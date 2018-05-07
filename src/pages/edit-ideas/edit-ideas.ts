import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditIdeasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-ideas',
  templateUrl: 'edit-ideas.html',
})
export class EditIdeasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditIdeasPage');
  }

  addIdea() {
    //this.viewCtrl.dismiss(this.sprint);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
