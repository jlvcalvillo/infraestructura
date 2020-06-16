import { Component, OnInit, Input } from '@angular/core';
import { CardInfra } from '../../../models/card-infra';

@Component({
  selector: 'app-card-infra',
  templateUrl: './card-infra.component.html',
  styleUrls: ['./card-infra.component.css']
})
export class CardInfraComponent implements OnInit {

  @Input()
  cardInfra:CardInfra;

  constructor() {}

  ngOnInit() {
  }

}
