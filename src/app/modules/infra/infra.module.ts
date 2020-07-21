import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfraRoutingModule } from './infra-routing.module';
import { MaterializeModule } from "angular2-materialize";
import { ReactiveFormsModule } from "@angular/forms";

import { InfraComponent } from './infra.component';
import { BarComponent } from "../shared/bar/bar.component";
import { CardInfraComponent } from '../shared/card-infra/card-infra.component';
import { CardHypervisorComponent } from '../shared/card-hypervisor/card-hypervisor.component';
import { CircleProgressComponent } from '../shared/circle-progress/circle-progress.component';
import { CardShardComponent } from '../shared/card-shard/card-shard.component';
import { InfraDetailsComponent } from './infra-details/infra-details.component';
import { CardStorageComponent } from '../shared/card-storage/card-storage.component';
import { NewInfraComponent } from './new-infra/new-infra.component';
import { DeleteInfraComponent } from './delete-infra/delete-infra.component';

@NgModule({
  declarations: [
    InfraComponent,
    BarComponent,
    CardInfraComponent,
    CardHypervisorComponent,
    CircleProgressComponent,
    CardShardComponent,
    InfraDetailsComponent,
    CardStorageComponent,
    NewInfraComponent,
    DeleteInfraComponent
  ],
  imports: [
    CommonModule,
    InfraRoutingModule,
    MaterializeModule,
    ReactiveFormsModule
  ]
})
export class InfraModule { }
