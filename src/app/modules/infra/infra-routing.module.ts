import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfraComponent } from './infra.component';
import { InfraDetailsComponent } from './infra-details/infra-details.component';


const routes: Routes = [
  {
    path:'dashboard', component:InfraComponent
  },
  {
    path:'dashboard/:id', component:InfraDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraRoutingModule { }
