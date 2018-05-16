import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  // Functions go here!
  getGot(){
      console.log("Yoooouuuu MONSTER!");
      return this._http.get('/authors');
  }

  httpDeleteAuthor(AuthorsID){
      console.log("we are going to delete this author", AuthorsID);
      let routePath = '/authors/' + AuthorsID
      let message = this._http.delete(routePath);
      return message
  }

}
