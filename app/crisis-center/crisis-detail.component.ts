import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Crisis} from './crisis';
import {CrisisService} from '../services/crisis-service';

@Component({
  template: `
    <h2>Crisis</h2>
    <div *ngIf="crisis">
      <h3>{{crisis.name}} details!</h3>
      <div><label>id: </label>{{crisis.id}}</div>
      <div>
        <label> name: </label>
        <input [(ngModel)]="crisis.name" placeholder="name"/>
      </div>
      <button (click)="gotoCrises()">Back</button>
    </div>
  `
})

export class CrisisDetailComponent {
  public crisis: Crisis;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:CrisisService) {}

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getCrisis(id).then(crisis => this.crisis = crisis);
  }

  gotoCrises() {
    this._router.navigate(['CrisisCenter']);
  }
}
