import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeepakdummyComponent } from '../deepakdummy/deepakdummy.component';


@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  messages = [
    { name:'Sumit Zade', locate:'Kolkata', category:'Emergency', date:'04/12/2019', time:'3:30pm' },
    { name:'Deepak Gupta',locate:'Delhi', category:'Emergency', date:'21/12/2019', time:'3:30pm' },
    { name:'Sumit Zade', locate:'Kolkata', category:'Emergency', date:'04/12/2019', time:'3:30pm' },
    { name:'Deepak Gupta',locate:'Delhi', category:'Emergency', date:'21/12/2019', time:'3:30pm' },
    { name:'Sumit Zade', locate:'Kolkata', category:'Emergency', date:'04/12/2019', time:'3:30pm' },
    { name:'Deepak Gupta',locate:'Delhi', category:'Emergency', date:'21/12/2019', time:'3:30pm' },
        
  { heading:'Alok Sigh', locate:'Uttar Pradesh', category:'Emergency', date:'04/12/2019', time:'3:30pm'  }
];
constructor(public modalController: ModalController) {}

async presentModal() {
  const modal = await this.modalController.create({
    component: DeepakdummyComponent,
    componentProps: { value: 123 }
  });
  return await modal.present();
}

  ngOnInit() {
  }

}
