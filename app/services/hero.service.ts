import {Injectable} from 'angular2/core';
import {HEROES} from './../mocks/mock-heroes';
import {Hero} from './../hero/hero';

@Injectable()

export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 1000)
    );
  }
}
