import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './app.component';
import {HeroService} from './services/hero.service';
import {CrisisService} from './services/crisis-service';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HeroService,
  CrisisService
]);
