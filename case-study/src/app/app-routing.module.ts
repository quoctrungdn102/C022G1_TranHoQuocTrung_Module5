import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeFurumaComponent} from "./home-furuma/home-furuma.component";
import {CustomerComponent} from "./customer/customer-list/customer.component";
import {CreatFacilityComponent} from "./facility/creat-facility/creat-facility.component";
import {FacilityComponent} from "./facility/facility-list/facility.component";
import {EditFacilityComponent} from "./facility/edit-facility/edit-facility.component";
import {DeleteFacilityComponent} from "./facility/delete-facility/delete-facility.component";
import {ContractComponent} from "./contract/contract-list/contract.component";



const routes:Routes = [
  {path:'', pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeFurumaComponent},
  {path:'facilityList',component: FacilityComponent},
  {path:'customerList',component: CustomerComponent},
  {path:'creatFacility',component: CreatFacilityComponent},
  {path:'edit-facility/:id',component: EditFacilityComponent},
  {path:'delete-facility/:id',component: DeleteFacilityComponent},
  {path:'contractList',component: ContractComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
