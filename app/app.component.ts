import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisCenterComponent} from './crisis-center/crisis-center.component';

import {HeroListComponent} from './hero/hero-list.component';
import {HeroDetailComponent} from './hero/hero-detail.component';

import {HeroFormComponent} from './hero-form/hero-form.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.tpl.html',
  directives: [
    ROUTER_DIRECTIVES
  ]
})

@RouteConfig([
  {path: '/crisis-center/...', name: 'CrisisCenter', component: CrisisCenterComponent, useAsDefault: true},

  {path:'/heroes', name: 'Heroes', component: HeroListComponent},
  {path:'/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},

  {path:'/hero-form', name: 'HeroForm', component: HeroFormComponent}
])

export class AppComponent {}
