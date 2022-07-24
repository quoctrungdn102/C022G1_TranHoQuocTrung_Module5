import {Component, OnInit} from '@angular/core';
import {Contract} from "../model/contract";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [
    {
      idContract: 'contrac1',
      starDay: '21-10-2020',
      endDay: '22-10-2020',
      deposits: 15555,
      moneyTotal: 555555,
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
