import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {HighlightDirective} from './highlight.directive';
import {HeavyLoaderComponent} from './heavy-loader.component';
import {UnlessDirective} from './unless.directive';

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

    <h2>My First Structural Directive</h2>
    <p *myUnless="condition">
      condition is false and myUnless is true.
    </p>
    <template [myUnless]="condition">
      <p>
        condition is false and myUnless is true.
      </p>
    </template>

    <p *myUnless="!condition">
      condition is true and myUnless is false.
    </p>


    <h2>Angular Structural Directives</h2>
    <div *ngIf="hero">{{hero}}</div>
    <div *ngFor="#hero of heroes">{{hero}}</div>
    <div [ngSwitch]="status">
      <template [ngSwitchWhen]="'in-mission'">In Mission</template>
      <template [ngSwitchWhen]="'ready'">Ready</template>
      <template ngSwitchDefault>Unknown</template>
    </div>

    <hr>

    <div><!-- Visibility -->
      <button (click)="isVisible = !isVisible">show | hide</button>
      <heavy-loader [style.display]="isVisible ? 'inline' : 'none'" [logs]="logs"></heavy-loader>
    </div>
    <div><!-- NgIf -->
      <button (click)="condition = !condition">if | !if</button>
      <heavy-loader *ngIf="condition" [logs]="logs"></heavy-loader>
    </div>
    <h4>heavy-loader log:</h4>
    <div *ngFor="#message of logs">{{message}}</div>

    <hr>

    <template [ngIf]="condition">
      <p>
        Our heroes are true!
      </p>
    </template>

    <template ngFor #hero [ngForOf]="heroes">
      <div>{{ hero }}</div>
    </template>

    <hr>
  `,
  directives: [
    HighlightDirective,
    HeavyLoaderComponent,
    UnlessDirective
  ]
})

export class DirectivesComponent {
  heroes = ['Mr. Nice', 'Narco', 'Bombasto'];
  hero = this.heroes[0];
  condition = true;
  isVisible = true;
  logs: string[] = [];
  status = 'ready';
}
