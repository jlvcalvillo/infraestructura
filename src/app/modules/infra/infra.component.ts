import { Component, OnInit } from '@angular/core';
import { InfraService } from 'src/app/services/infra.service';
import { CardInfra } from '../../models/card-infra';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-infra',
  templateUrl: './infra.component.html',
  styleUrls: ['./infra.component.css']
})
export class InfraComponent implements OnInit {

  infra:CardInfra[];

  constructor( private infraService:InfraService ) { }

  ngOnInit() {
    this.infra = this.infraService.getInfra();
  }

}
