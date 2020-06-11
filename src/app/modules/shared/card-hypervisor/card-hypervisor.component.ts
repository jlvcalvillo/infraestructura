import { Component, OnInit } from '@angular/core';
import { CardHypervisor } from '../../../models/card-hypervisor';

@Component({
  selector: 'app-card-hypervisor',
  templateUrl: './card-hypervisor.component.html',
  styleUrls: ['./card-hypervisor.component.css']
})
export class CardHypervisorComponent implements OnInit {

  cardHypervisor:CardHypervisor;
  percentCpu:number;
  percentRam:number;
  percentHd:number;

  constructor() { }

  ngOnInit() {
    this.cardHypervisor = {
      name: 'Hypervisor 1',
      cpu_all: 150,
      cpu_used:144,
      ram_all:600,
      ram_used:512,
      hd_all:1500,
      hd_used:1150
    };

    this.percentCpu = (this.cardHypervisor.cpu_used * 100) / this.cardHypervisor.cpu_all;
    this.percentRam = (this.cardHypervisor.ram_used * 100) / this.cardHypervisor.ram_all;
    this.percentHd = (this.cardHypervisor.hd_used * 100) / this.cardHypervisor.hd_all;

  }

}
