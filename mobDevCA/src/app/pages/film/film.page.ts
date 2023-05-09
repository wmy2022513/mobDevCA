import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }

  ngOnInit() {
  }

  openDetails(){
    this.router.navigateByUrl('/tabs/films/id');
  }

  gotoPeople(){
    this.navController.navigateRoot('tabs/people')
  }

  gotoPlanets(){
    this.navController.navigateRoot('/tabs/planets')
  }

}
