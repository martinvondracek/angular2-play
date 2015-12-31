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

  getHero(id: number | string) {
    return Promise.resolve(HEROES)
      .then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
}
