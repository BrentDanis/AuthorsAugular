import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
    authors: any;


  constructor(private _httpService: HttpService) {}

  ngOnInit() {
      this.getAuthorsTable();
  }

  getAuthorsTable(){
      console.log("Well... at least this works...")
      let authorObservable = this._httpService.getGot();
      authorObservable.subscribe(data => {
          console.log("Baby steps now..");
          this.authors = data;
      })
  }

  deleteAuthor(AuthorID){
      console.log("We b Delet'n", AuthorID);
      let theresult = this._httpService.httpDeleteAuthor(AuthorID);
      theresult.subscribe(data => {
          console.log("YO MADE IT! YOU FUCK!");
          console.log(data);
      })
      this.getAuthorsTable();
  }

}
