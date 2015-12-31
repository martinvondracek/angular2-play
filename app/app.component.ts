import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroListComponent} from './hero/hero-list.component';
import {CrisisListComponent} from './crisis/crisis-list.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {HeroBirthday} from './pipes/hero-birthday.component';
import {PowerBooster} from './pipes/power-booster.component';
import {PowerBoostCalculator} from './pipes/power-boost-calculator.component';
import {HeroAsyncMessageComponent} from './pipes/hero-async-message.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.tpl.html',
  directives: [
    ROUTER_DIRECTIVES
  ]
})

@RouteConfig([
  {path:'/crisis-center', name: 'CrisisCenter', component: CrisisListComponent},
  {path:'/heroes', name: 'Heroes', component: HeroListComponent}
])

export class AppComponent {}
