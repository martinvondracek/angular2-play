import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroListComponent} from './hero/hero-list.component';
import {CrisisListComponent} from './crisis-center/crisis-list.component';
import {HeroDetailComponent} from './hero/hero-detail.component';
import {CrisisDetailComponent} from './crisis-center/crisis-detail.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.tpl.html',
  directives: [
    ROUTER_DIRECTIVES
  ]
})

@RouteConfig([
  {path:'/crisis-center', name: 'CrisisCenter', component: CrisisListComponent, useAsDefault:true},
  {path:'/crisis/:id', name: 'CrisisDetail', component: CrisisDetailComponent},
  {path:'/heroes', name: 'Heroes', component: HeroListComponent},
  {path:'/hero/:id', name: 'HeroDetail', component: HeroDetailComponent}
])

export class AppComponent {}
