import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {Crisis} from './crisis';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisService} from './../services/crisis-service';

@Component({
  template: `
    <h1>CRISIS CENTER</h1>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers: [CrisisService]
})

@RouteConfig([
  {path:'/',         name: 'CrisisCenter', component: CrisisListComponent, useAsDefault: true},
  {path:'/:id',      name: 'CrisisDetail', component: CrisisDetailComponent},
  {path:'/list/:id', name: 'CrisisList',   component: CrisisListComponent}
])

export class CrisisCenterComponent { }
