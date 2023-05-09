import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
  }
  clicked = false; // for button disabled after clicked, it's better put into component class(next time)
  contents: any=[] ;

  runHttp(){
    this.http.get('https://www.omdbapi.com/?i=tt3896198&apikey=fc242de8') // use api with api key get data
      .subscribe(data => {
        console.log(data); //for testing by display to the browser
        this.contents.push(data); //push data to an array
      });
      
  }
  
}
