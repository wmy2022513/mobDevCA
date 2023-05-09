import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  constructor(private navController: NavController, private router:Router) { }

  ngOnInit() {
  }
  gotoFilms(){
    this.navController.navigateRoot('/tabs/films')
  }
  gotoPeople(){
    this.navController.navigateRoot('tabs/people')
  }



}
