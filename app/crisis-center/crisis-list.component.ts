import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Crisis} from './crisis';
import {CrisisService} from './../services/crisis-service';

@Component({
  template: `
    <h2>Crisis list</h2>
    <ul>
      <li *ngFor="#crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `
})

export class CrisisListComponent implements OnInit {
  public title = 'CRISIS CENTER'
  public crises: Crisis[];
  private _selectedId: number;

  constructor(
    private _router: Router,
    private _service: CrisisService,
    routeParams: RouteParams
  ) {
    this._selectedId = +routeParams.get('id');
  }

  ngOnInit() {
    this._service.getCrises()
      .then(crises => this.crises = crises);
  }

  isSelected(crisis: Crisis) {
    return crisis.id === this._selectedId;
  }

  onSelect(crisis: Crisis) {
    this._selectedId = crisis.id;
    this._router.navigate(['CrisisDetail', {id: this._selectedId}]);
  }
}
