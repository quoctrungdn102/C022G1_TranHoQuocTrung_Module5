import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeFurumaComponent} from "./home-furuma/home-furuma.component";
import {CustomerComponent} from "./customer/customer-list/customer.component";
import {CreatFacilityComponent} from "./facility/creat-facility/creat-facility.component";
import {FacilityComponent} from "./facility/facility-list/facility.component";



const routes:Routes = [
  {path:'', pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeFurumaComponent},
  {path:'facilityList',component: FacilityComponent},
  {path:'customerList',component: CustomerComponent},
  {path:'creatFacility',component: CreatFacilityComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
