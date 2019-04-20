import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-responce-plan',
  templateUrl: './emergency-responce-plan.page.html',
  styleUrls: ['./emergency-responce-plan.page.scss'],
})
export class EmergencyResponcePlanPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emergencylist = [
    { bgcolor:'yellow', emergencyheadingtitle:'Incident Management System', href:'emergency-responce-plan' },
    { bgcolor:'yellow', emergencyheadingtitle:'Evacuation' },
    { bgcolor:'yellow', emergencyheadingtitle:'Reverse Evacuation' },
    { bgcolor:'yellow', emergencyheadingtitle:'Lock Down / Secured Perimeter' },
    { bgcolor:'yellow', emergencyheadingtitle:'Selter in Place' },
    { bgcolor:'yellow', emergencyheadingtitle:'Reunification' },

    { bgcolor:'orange', emergencyheadingtitle:'Fire' },
    { bgcolor:'orange', emergencyheadingtitle:'Hazardous Materials' },
    { bgcolor:'orange', emergencyheadingtitle:'Medical Emergency' },
    { bgcolor:'orange', emergencyheadingtitle:'Winter Storm' },
    { bgcolor:'orange', emergencyheadingtitle:'Earthquake' },

    { bgcolor:'mehroon', emergencyheadingtitle:'Violence on School Grounds' },
    { bgcolor:'mehroon', emergencyheadingtitle:'Sexual Assault' },
    { bgcolor:'mehroon', emergencyheadingtitle:'Suicide Attempt / Threat ' },
    { bgcolor:'mehroon', emergencyheadingtitle:'Missing Person' },
    { bgcolor:'mehroon', emergencyheadingtitle:'Bomb Threat' },
    { bgcolor:'mehroon', emergencyheadingtitle:'Civil Disorder' },
  
    { bgcolor:'green', emergencyheadingtitle:'Power Outage' },
    { bgcolor:'green', emergencyheadingtitle:'Natural Gas leak / Loss of Service' },
    { bgcolor:'green', emergencyheadingtitle:'Flooding / Sewer Incident' },
    { bgcolor:'green', emergencyheadingtitle:'Communication Loss' },
    { bgcolor:'green', emergencyheadingtitle:'Food and Water Contamination' },
    { bgcolor:'green', emergencyheadingtitle:'Pandemic' },

    { bgcolor:'darkgreen', emergencyheadingtitle:'Transpotation Incident' },
    { bgcolor:'darkgreen', emergencyheadingtitle:'Special Rescue' },
    { bgcolor:'darkgreen', emergencyheadingtitle:'Structure Collapse' },
    { bgcolor:'darkgreen', emergencyheadingtitle:'Death of Student / Staff Member' },
    { bgcolor:'darkgreen', emergencyheadingtitle:'Chemical Attack / Incident' },
    { bgcolor:'darkgreen', emergencyheadingtitle:'Biological Attack / Incident' },

    { bgcolor:'blue', emergencyheadingtitle:'Radiological Attack / Release' },
    { bgcolor:'blue', emergencyheadingtitle:'Nuclear Attack / Release' },
    { bgcolor:'blue', emergencyheadingtitle:'Explosion' }

];

}
