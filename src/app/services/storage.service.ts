import { Injectable } from '@angular/core';
import { CardStorage } from '../models/card-storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storage:CardStorage[] = [
    {
      id:1,
      name:"XtremIO",
      elements: [
        {
          name: "Garantía",
          value: "13-Dic-2020"
        },
        {
          name: "Capacidad",
          value: "10TB"
        },
        {
          name: "Usable",
          value: "9.9TB"
        }
      ]
    },
    {
      id:2,
      name:"Unity 550 F",
      elements: [
        {
          name: "Garantía",
          value: "04-Mar-2023"
        },
        {
          name: "Capacidad",
          value: "12TB"
        },
        {
          name: "Usable",
          value: "11.5TB"
        }
      ]
    }
  ];

  dataBase:CardStorage[] = [
    {
      id:1,
      name:"Mongo DB",
      elements: [
        {
          name: "Shard 01",
          value: "397.09 GB"
        },
        {
          name: "Shard 02",
          value: "988.91 GB"
        },
        {
          name: "Shard 03",
          value: "775.02 GB"
        },
        {
          name: "Total",
          value: "2151.02 GB"
        }
      ]
    }
  ];

  constructor() { }

  getStorage() {
    return this.storage;
  }

  getDataBase() {
    return this.dataBase;
  }
}
