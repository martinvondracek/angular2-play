import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {HighlightDirective} from './highlight.directive';

@Component({
  template: `
    <h1>Directives</h1>

    <h2>My First Attribute Directive</h2>

    <h4>Pick a highlight color</h4>
    <div>
      <input type="radio" name="colors" (click)="color='lightgreen'">Green
      <input type="radio" name="colors" (click)="color='yellow'">Yellow
      <input type="radio" name="colors" (click)="color='cyan'">Cyan
    </div>

    <span [myHighlight]="color">Highlight me!</span>

    <p [myHighlight]="color" [defaultColor]="'violet'">
      Highlight me too!
    </p>
  `,
  directives: [HighlightDirective]
})

export class DirectivesComponent { }
