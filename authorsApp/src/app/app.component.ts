import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aperture Laboratories AuthorsDB';
  mainAuthorCollection: any;

  constructor(private _httpService: HttpService){
      
  }

  getAuthors(){
      let AuthorObservable = this._httpService.getGot();
      AuthorObservable.subscribe(data => {
          console.log(`This is the data you are looking at: ${data}`);
          this.mainAuthorCollection = data;
      });
  }
}
