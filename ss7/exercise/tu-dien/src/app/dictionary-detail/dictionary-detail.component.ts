import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DictionaryServiceService} from "../dictionary-service.service";
import {IWord} from "../i-word";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;

  constructor(private  activatedRoute:ActivatedRoute,private dictionaryService:DictionaryServiceService,router : Router) { }

  ngOnInit(): void {
  const mean =  this.activatedRoute.snapshot.params.mean
   this.word = this.dictionaryService.findWord(mean)
  }

}
