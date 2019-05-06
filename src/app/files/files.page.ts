import { Component } from '@angular/core';
import { NavController,  ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
 

export class FilesPage {
  segmentChanged(ev: any) {
    console.log('ionViewDidLoad FilesPage', ev);
    this.tab = "active";
  }
  tab:any;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {
    }
  
    
    tab_swap(type) {
        this.tab = type;
       }
      
        
     
    
  }

