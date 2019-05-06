import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController,IonSlides, IonSlide } from '@ionic/angular';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { MyIonSlide } from './custom-ion-slide';

@Component({
  selector: 'app-incident-management-system',
  templateUrl: './incident-management-system.page.html',
  styleUrls: ['./incident-management-system.page.scss'],
})  
export class IncidentManagementSystemPage {

  @ViewChild('mySlider') slider: MyIonSlide;
  currentIndex:any;
  content: any;
  
    constructor(public navCtrl: NavController) {
  
  this.currentIndex = 0;
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad IncidentManagementSystemPage');
    }
  
    onSlideChanged() {
  
    }
    goToNextSlide() {
      this.slider.slideNext();
      this.currentIndex = this.slider.getActiveIndex();
    }
   
goToPrevSlide() {
  this.slider.slidePrev();
  this.content.scrollToTop();
}
  goBack(){
    this.navCtrl.pop();
  }
  
      signin() {
        this.navCtrl.push('Signin');
        }
          
  
  
  
  }
  