import {Component} from 'angular2/core';
import {HeroListComponent} from './hero/hero-list.component';
import {HeroFormComponent} from './hero-form/hero-form.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.tpl.html',
  directives: [HeroListComponent, HeroFormComponent]
})

export class AppComponent {}
