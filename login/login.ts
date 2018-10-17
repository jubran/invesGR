import { Component   } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  tab3 = 'SignInPage';
  tab4 = 'SignUpPage';
  
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}


