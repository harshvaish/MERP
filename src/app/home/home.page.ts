import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  homecategory = [
    { headingtitle:'EMERGENCY RESPONCE PLAN', href:'emergency-responce-plan' },
    { headingtitle:'TRANSPORTATION EMERGENCY PROCEDURE GUIDE' },
    { headingtitle:'BUILDING PERSONNEL PROCEDURE GUIDE' },
    { headingtitle:'SAFE SCHOOL' },
    { headingtitle:'TEST PLAN' },
    { headingtitle:'TEST PLAN 2' },
    { headingtitle:'TEST 3' },
          
  { headingtitle:'TEST 4' }
];
}
