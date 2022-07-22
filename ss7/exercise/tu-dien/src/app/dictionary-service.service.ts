import {Injectable} from '@angular/core';
import {IWord} from "./i-word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionaries: IWord[] = [
    {
      word: "trung",
      mean: "đẹp trai",
    },
    {
      word: "I love you",
      mean: "Anh yêu em ",
    }

  ];

  constructor() {
  }
  getAll(){
    return this.dictionaries
  }
  findWord(word:string):IWord{
    for (let i  = 0 ; i<this.dictionaries.length;i++){
      if (this.dictionaries[i].mean === word){
        return this.dictionaries[i];
      }
    }

  }
}
