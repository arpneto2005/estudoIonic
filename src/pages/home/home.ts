import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/** Import de Page */
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToSecondPage(){
    this.navCtrl.push(SecondPage);
  }

}
