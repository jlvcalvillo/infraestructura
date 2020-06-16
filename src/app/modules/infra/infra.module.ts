import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfraRoutingModule } from './infra-routing.module';

import { InfraComponent } from './infra.component';
import { BarComponent } from "../shared/bar/bar.component";
import { CardInfraComponent } from '../shared/card-infra/card-infra.component';
import { CardHypervisorComponent } from '../shared/card-hypervisor/card-hypervisor.component';
import { CircleProgressComponent } from '../shared/circle-progress/circle-progress.component';
import { CardShardComponent } from '../shared/card-shard/card-shard.component';
import { InfraDetailsComponent } from './infra-details/infra-details.component';
import { CardStorageComponent } from '../shared/card-storage/card-storage.component';

@NgModule({
  declarations: [
    InfraComponent,
    BarComponent,
    CardInfraComponent,
    CardHypervisorComponent,
    CircleProgressComponent,
    CardShardComponent,
    InfraDetailsComponent,
    CardStorageComponent
  ],
  imports: [
    CommonModule,
    InfraRoutingModule
  ]
})
export class InfraModule { }
