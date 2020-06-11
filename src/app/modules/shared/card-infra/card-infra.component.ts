import { Component, OnInit } from '@angular/core';
import { CardInfra } from '../../../models/card-infra';

@Component({
  selector: 'app-card-infra',
  templateUrl: './card-infra.component.html',
  styleUrls: ['./card-infra.component.css']
})
export class CardInfraComponent implements OnInit {

  cardInfra:CardInfra;

  constructor() {
    this.cardInfra = {
      id: 1,
      name: 'Servicios CORE',
      percentage: 70
    };
   }

  ngOnInit() {
  }

}
