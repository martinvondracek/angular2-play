import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroListComponent} from './hero/hero-list.component';
import {CrisisListComponent} from './crisis/crisis-list.component';
import {HeroDetailComponent} from './hero/hero-detail.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.tpl.html',
  directives: [
    ROUTER_DIRECTIVES
  ]
})

@RouteConfig([
  {path:'/crisis-center', name: 'CrisisCenter', component: CrisisListComponent, useAsDefault:true},
  {path:'/heroes', name: 'Heroes', component: HeroListComponent},
  {path:'/hero/:id', name: 'HeroDetail', component: HeroDetailComponent}
])

export class AppComponent {}
