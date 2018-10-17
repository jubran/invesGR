import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Nav } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any, openTab? : any}>;
  rootPage = 'DashBoaredPage'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Dashboard', component: 'DashBoaredPage' },
      { title: 'My Profile', component: 'ListsTabsPage' },
      { title: 'Reports', component: 'ReportPage', openTab: 1 },
      { title: 'Login', component: 'LoginPage' ,openTab: 1},
    ];
  }
 
  openPage(page) {
    this.nav.setRoot(page.component, { openTab: page.openTab });
  }
}
