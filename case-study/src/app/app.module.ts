import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeadComponent} from './head/head.component';
import {FoterComponent} from './foter/foter.component';
import {FacilityComponent} from './facility/facility-list/facility.component';
import {CustomerComponent} from './customer/customer-list/customer.component';
import {CreatFacilityComponent} from './facility/creat-facility/creat-facility.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeFurumaComponent} from "./home-furuma/home-furuma.component";
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ContractComponent } from './contract/contract-list/contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { DeleteFacilityComponent } from './facility/delete-facility/delete-facility.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FoterComponent,
    FacilityComponent,
    CustomerComponent,
    CreatFacilityComponent,
    EditFacilityComponent,
    HomeFurumaComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ContractComponent,
    CreateContractComponent,
    DeleteFacilityComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
