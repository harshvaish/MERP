import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'emergency', loadChildren: './emergency/emergency.module#EmergencyPageModule' },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'active-shooter', loadChildren: './active-shooter/active-shooter.module#ActiveShooterPageModule' },
  { path: 'send-message', loadChildren: './send-message/send-message.module#SendMessagePageModule' },
  { path: 'wizard-popover', loadChildren: './wizard-popover/wizard-popover.module#WizardPopoverPageModule' },
  { path: 'icon-keys', loadChildren: './icon-keys/icon-keys.module#IconKeysPageModule' },
  { path: 'update-profile', loadChildren: './update-profile/update-profile.module#UpdateProfilePageModule' },
  { path: 'modal-page', loadChildren: './modal-page/modal-page.module#ModalPagePageModule' },
  { path: 'emergency-responce-plan', loadChildren: './emergency-responce-plan/emergency-responce-plan.module#EmergencyResponcePlanPageModule' },
  { path: 'files', loadChildren: './files/files.module#FilesPageModule' },
  { path: 'emergencyphonenumber', loadChildren: './emergencyphonenumber/emergencyphonenumber.module#EmergencyphonenumberPageModule' },
  { path: 'forgetpassword', loadChildren: './forgetpassword/forgetpassword.module#ForgetpasswordPageModule' },
  { path: 'incident-management-system', loadChildren: './incident-management-system/incident-management-system.module#IncidentManagementSystemPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
