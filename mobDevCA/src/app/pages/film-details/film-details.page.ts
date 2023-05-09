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
  clicked = false;
  contents: any=[] ;

  runHttp(){
    this.http.get('https://www.omdbapi.com/?i=tt3896198&apikey=fc242de8')
      .subscribe(data => {
        console.log(data);
        this.contents.push(data);
      });
      
  }
  
}
