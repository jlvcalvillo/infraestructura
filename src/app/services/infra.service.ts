import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import  data from "../../assets/data.json";
import { element } from 'protractor';
import { CardStorage } from '../models/card-storage';

@Injectable({
  providedIn: 'root'
})
export class InfraService {

  constructor(private http:HttpClient) {}

  getData() {
    return data;
  }

  getInfra() {
    return data.infra;
  }

  getStorageById(id_infra:number) {
    return data.storage.find((element) => {element.id_infra == id_infra});
  }
}


//https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3
//https://blog.maestriajs.com/blog/tips/data-sharing-in-multi-view/