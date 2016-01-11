import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router, CanDeactivate, ComponentInstruction} from 'angular2/router';
import {DialogService} from '../dialog.service';

import {Crisis} from './crisis';
import {CrisisService} from '../services/crisis-service';

@Component({
  template: `
    <h2>Crisis detail</h2>
    <div *ngIf="crisis">
      <h3>{{editName}} details!</h3>
      <div><label>id: </label>{{crisis.id}}</div>
      <div>
        <label> name: </label>
        <input [(ngModel)]="editName" placeholder="name"/>
      </div>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </div>
  `,
  styles: ['input {width: 20em}']
})

export class CrisisDetailComponent implements OnInit, CanDeactivate {
  public crisis: Crisis;
  public editName: string;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:CrisisService,
    private _dialog: DialogService
  ) {}

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getCrisis(id).then(crisis => {
      if (crisis) {
        this.editName = crisis.name;
        this.crisis = crisis;
      } else { // id not found
        this.gotoCrises();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) : any {
    // Allow navigation (`true`) if no crisis or the crisis is unchanged.
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves true-or-false when the user decides
    return !this.crisis ||
      this.crisis.name === this.editName ||
      this._dialog.confirm('Discard changes?');
  }

  cancel() {
    this.editName = this.crisis.name;
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    let route =
      ['CrisisList',  {id: this.crisis ? this.crisis.id : null} ];

    this._router.navigate(route);
  }
}
