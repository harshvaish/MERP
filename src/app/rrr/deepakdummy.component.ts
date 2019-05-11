import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-deepakdummy',
  templateUrl: './deepakdummy.component.html',
  styleUrls: ['./deepakdummy.component.scss'],
})
export class DeepakdummyComponent implements OnInit {

  // "value" passed in componentProps
  @Input() value: number;

  constructor(navParams: NavParams) {
    // componentProps can also be accessed at construction time using NavParams
  }
  ngOnInit() {}

}
