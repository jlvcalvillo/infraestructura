import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfraService } from '../../../services/infra.service';
import { CardInfra } from '../../../models/card-infra';
import { CardHypervisor } from '../../../models/card-hypervisor';
import { HypervisorService } from '../../../services/hypervisor.service';
import { StorageService } from '../../../services/storage.service';
import { CardStorage } from '../../../models/card-storage';
import { ShardService } from '../../../services/shard.service';
import { CardShard } from '../../../models/card-shard';

@Component({
  selector: 'app-infra-details',
  templateUrl: './infra-details.component.html',
  styleUrls: ['./infra-details.component.css']
})
export class InfraDetailsComponent implements OnInit {

  id:any;
  infra:CardInfra;
  hypervisors:CardHypervisor[];
  storages:CardStorage[];
  dataBases:CardStorage[];
  shards:CardShard[];

  constructor(private activatedRoute:ActivatedRoute,
              private infraService:InfraService,
              private hypervisorService:HypervisorService,
              private storageService:StorageService,
              private shardService:ShardService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    //this.infra = this.infraService.getInfraIndex(this.id);
    console.log(this.infraService.getStorageById(this.id));

    this.hypervisors = this.hypervisorService.getHypervisors();
    this.dataBases = this.storageService.getDataBase();
    this.shards = this.shardService.getShards();
  }

  

}
