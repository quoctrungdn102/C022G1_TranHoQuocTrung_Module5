import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../dictionary-service.service";
import {IWord} from "../i-word";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listDictionary:IWord[];

  constructor(private dictionaryService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.listDictionary =  this.dictionaryService.getAll();
  }

}
