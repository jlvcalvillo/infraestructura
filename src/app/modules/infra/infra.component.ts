import { Component, OnInit } from '@angular/core';
import { InfraService } from 'src/app/services/infra.service';
import { CardInfra } from '../../models/card-infra';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-infra',
  templateUrl: './infra.component.html',
  styleUrls: ['./infra.component.css']
})
export class InfraComponent implements OnInit {

  infra:CardInfra[];

  urlDestiny:string;

  constructor( private infraService:InfraService,
               private router:Router ) {
                 this.urlDestiny = this.router.url;
               }

  ngOnInit() {
    this.infra = this.infraService.getInfra();
  }

}
