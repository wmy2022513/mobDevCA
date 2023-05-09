import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { FilmPageModule } from '../film/film.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path: 'films',
        children:[
          {
            path:'',
            loadChildren: () => import('../film/film.module').then(m => m.FilmPageModule)
          },
          {
            path:'id',
            loadChildren: () => import('../film-details/film-details.module').then(m => m.FilmDetailsPageModule)
          },
        ]
      },
      {
        path:'people',
        loadChildren: () => import('../people/people.module').then(m => m.PeoplePageModule)
      },
      {
        path:'planets',
        children:[
          {
            path:'',
            loadChildren: () => import('../planets/planets.module').then(m => m.PlanetsPageModule)
          }
        ]
      }
    ]
  },
  {
    path:'',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
