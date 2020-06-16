import { Component, OnInit, Input } from '@angular/core';
import { CardHypervisor } from '../../../models/card-hypervisor';

@Component({
  selector: 'app-card-hypervisor',
  templateUrl: './card-hypervisor.component.html',
  styleUrls: ['./card-hypervisor.component.css']
})
export class CardHypervisorComponent implements OnInit {

  @Input()
  cardHypervisor:CardHypervisor;

  percentCpu:number;
  percentRam:number;
  percentHd:number;

  constructor() { }

  ngOnInit() {
    this.percentCpu = (this.cardHypervisor.cpu_used * 100) / this.cardHypervisor.cpu_all;
    this.percentRam = (this.cardHypervisor.ram_used * 100) / this.cardHypervisor.ram_all;
    this.percentHd = (this.cardHypervisor.hd_used * 100) / this.cardHypervisor.hd_all;
  }

}
