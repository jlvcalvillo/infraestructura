import { Component, OnInit, Input } from '@angular/core';
import { CardInfra } from '../../../models/card-infra';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-infra',
  templateUrl: './card-infra.component.html',
  styleUrls: ['./card-infra.component.css']
})
export class CardInfraComponent implements OnInit {

  @Input()
  cardInfra:CardInfra;
  
  urlDestiny:string;

  item:any = {
    urlDestiny : "",
    id: 0
  };

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.item.urlDestiny = this.router.url;
    this.item.id = this.cardInfra.id;
    console.log(this.item);
  }

}
