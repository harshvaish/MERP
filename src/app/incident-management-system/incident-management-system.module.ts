import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IncidentManagementSystemPage } from './incident-management-system.page';
import { MyIonSlide } from './custom-ion-slide';

const routes: Routes = [
  {
    path: '',
    component: IncidentManagementSystemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[MyIonSlide],
  declarations: [IncidentManagementSystemPage]
})
export class IncidentManagementSystemPageModule {}
