import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeadComponent} from './head/head.component';
import {FoterComponent} from './foter/foter.component';
import {FacilityComponent} from './facility/facility.component';
import {CustomerComponent} from './customer/customer.component';
import {CreatFacilityComponent} from './creat-facility/creat-facility.component';
import {EditFacilityComponent} from './edit-facility/edit-facility.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeFurumaComponent} from "./home-furuma/home-furuma.component";
import {FacilityService} from "./service/facility.service";
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
