import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './../services/hero.service';

@Component({
  template: `
    <h2>HEROES</h2>
    <div *ngIf="hero">
      <h3>{{hero.name}} details!</h3>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label> name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click)="gotoHeroes()">Back</button>
    </div>
  `
})

export class HeroDetailComponent {
  public hero: Hero;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _heroService:HeroService){}
  ngOnInit() {
    let id = this._routeParams.get('id');
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }
  gotoHeroes() {
    this._router.navigate(['Heroes']);
  }
}
