import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './../services/hero.service';
import {FetchJsonPipe} from '../pipes/fetch-json.pipe';

@Component({
  selector: 'hero-list',
  templateUrl: 'app/hero/hero-list.tpl.html',
  styles:[`
    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
    .heroes .badge {
      font-size: small;
      color: white;
      padding: 0.1em 0.7em;
      background-color: #369;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
    }
    .selected { background-color: #EEE; color: #369; }
  `],
  directives: [HeroDetailComponent],
  providers: [HeroService],
  pipes: [FetchJsonPipe]
})

export class HeroListComponent implements OnInit {
  public title = 'Tour of Heroes';
  public heroes = [];
  public selectedHero: Hero;

  constructor(private _heroService: HeroService) {}

  getHeroes() {
    this._heroService.getHeroesSlowly()
      .then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
