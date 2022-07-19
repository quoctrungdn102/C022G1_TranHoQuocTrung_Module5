 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FoterComponent } from './foter/foter.component';
import { FacilityComponent } from './facility/facility.component';
import { CustomerComponent } from './customer/customer.component';
import { CreatFacilityComponent } from './creat-facility/creat-facility.component';
import { EditFacilityComponent } from './edit-facility/edit-facility.component';
import {FormsModule} from "@angular/forms";
 import {HomeFurumaComponent} from "./home-furuma/home-furuma.component";

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FoterComponent,
    FacilityComponent,
    CustomerComponent,
    CreatFacilityComponent,
    EditFacilityComponent,
    HomeFurumaComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
