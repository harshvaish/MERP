import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmergencyResponcePlanPage } from './emergency-responce-plan.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyResponcePlanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmergencyResponcePlanPage]
})
export class EmergencyResponcePlanPageModule {}
