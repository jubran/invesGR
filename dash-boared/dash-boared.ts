import { Component   } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dash-boared',
  templateUrl: 'dash-boared.html',
})
export class DashBoaredPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public loadingCtrl: LoadingController) {
  }
  /*هذا الجزء الخاص بالزر  */
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }
   /*هذا الجزء الخاص بالزر  */
}
