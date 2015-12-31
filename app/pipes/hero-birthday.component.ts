import {Component} from 'angular2/core'

@Component({
  selector: 'hero-birthday',
  template: `
    <p>The hero's birthday is {{ birthday | date:format }}</p>
    <button (click)="toggleFormat()">Toggle format</button>
    <br>
    <p>
      The chained hero's birthday is
      {{ birthday | date:'fullDate' | uppercase}}
    </p>
    `
})
export class HeroBirthday {
  birthday = new Date(1988,3,15);

  toggle = true;

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
