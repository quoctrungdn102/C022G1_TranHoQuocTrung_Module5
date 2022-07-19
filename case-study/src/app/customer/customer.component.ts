import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer:Customer={};
  customers:Customer[]=[
    {
      nameCustomer: 'trung',
      dateCustomer:  '2021-10-10',
      genderCustomer: true,
      cardCustomer: "1234568",
      telephoneNumber:'09053692',
      emailCustomer: 'trungtran@gmail.com',
      typeCustomer:'vip',
      addressCustomer:'Đà Nẵng',
    },
    {
      nameCustomer: 'trung',
      dateCustomer:  '2021-10-10',
      genderCustomer: false,
      cardCustomer: "1234568",
      telephoneNumber:'09053692',
      emailCustomer: 'trungtran@gmail.com',
      typeCustomer:'vip',
      addressCustomer:'Đà Nẵng',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
