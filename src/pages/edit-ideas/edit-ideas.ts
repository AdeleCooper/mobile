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
  creating: any;
  title: any;
  idea = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    var ideaToEdit = navParams.get('Idea');
    if (ideaToEdit) {
      this.idea = ideaToEdit;
      this.title = "Edit Video Idea";
      this.creating = false;
    } else {
      this.title = "Add Video Idea";
      this.creating = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditIdeasPage');
  }

  addIdea() {
    this.viewCtrl.dismiss(this.idea);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
