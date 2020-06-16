import { Injectable } from '@angular/core';
import { CardHypervisor } from '../models/card-hypervisor';

@Injectable({
  providedIn: 'root'
})
export class HypervisorService {

  hypervisors:CardHypervisor[] = [
    {
      id:1,
      name: 'Hypervisor 1',
      mark: 'lenovo',
      model:'DL580 G9',
      cpu_all: 150,
      cpu_used:144,
      ram_all:600,
      ram_used:512,
      hd_all:1500,
      hd_used:1150
    },
    {
      id:2,
      name: 'Hypervisor 2',
      mark: 'lenovo',
      model:'DL580 G9',
      cpu_all: 150,
      cpu_used:144,
      ram_all:600,
      ram_used:512,
      hd_all:1500,
      hd_used:1150
    },
    {
      id:3,
      name: 'Hypervisor 3',
      mark: 'lenovo',
      model:'DL580 G9',
      cpu_all: 150,
      cpu_used:144,
      ram_all:600,
      ram_used:512,
      hd_all:1500,
      hd_used:1150
    },
    {
      id:4,
      name: 'Hypervisor 4',
      mark: 'hp',
      model:'DL580 G9',
      cpu_all: 150,
      cpu_used:144,
      ram_all:600,
      ram_used:512,
      hd_all:1500,
      hd_used:1150
    },
    {
      id:5,
      name: 'Hypervisor 5',
      mark: 'hp',
      model:'DL580 G9',
      cpu_all: 150,
      cpu_used:144,
      ram_all:600,
      ram_used:512,
      hd_all:1500,
      hd_used:1150
    },
    {
      id:6,
      name: 'Hypervisor 6',
      mark: 'hp',
      model:'DL580 G9',
      cpu_all: 150,
      cpu_used:144,
      ram_all:600,
      ram_used:512,
      hd_all:1500,
      hd_used:1150
    }
  ]

  constructor() { }

  getHypervisors(){
    return this.hypervisors;
  }

  getHypervisor(index:number) {
    return this.hypervisors.find(item => item.id == index);
  }
}
