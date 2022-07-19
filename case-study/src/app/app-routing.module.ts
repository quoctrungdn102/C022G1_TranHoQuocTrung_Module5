import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityComponent} from "./facility/facility.component";
import {HomeFurumaComponent} from "./home-furuma/home-furuma.component";
import {CustomerComponent} from "./customer/customer.component";
import {CreatFacilityComponent} from "./creat-facility/creat-facility.component";



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
