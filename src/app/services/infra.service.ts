import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CardInfra } from '../models/card-infra';

@Injectable({
  providedIn: 'root'
})
export class InfraService {

  data:CardInfra[] = [{
    "id": 1,
    "name": "Servicios CORE",
    "percentage": 70
},
{
    "id": 2,
    "name": "eBanking",
    "percentage": 70
},
{
    "id": 3,
    "name": "DevOPS",
    "percentage": 100
},
{
    "id": 4,
    "name": "Alnova 1",
    "percentage": 90
},
{
    "id": 5,
    "name": "Alnova 2",
    "percentage": 65
}
];

  constructor(private http:HttpClient) {}

  getInfra() {
    return this.data;
  }

  getInfraById(index:number) {
    return this.data.find((element) => {
      element.id == index
    });
  }
}