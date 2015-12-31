import {Component} from 'angular2/core';
import {HeroListComponent} from './hero/hero-list.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {HeroBirthday} from './pipes/hero-birthday.component';
import {PowerBooster} from './pipes/power-booster.component';
import {PowerBoostCalculator} from './pipes/power-boost-calculator.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.tpl.html',
  directives: [HeroListComponent, HeroFormComponent, HeroBirthday, PowerBooster,
  PowerBoostCalculator]
})

export class AppComponent {}
