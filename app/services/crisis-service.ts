import {Injectable} from 'angular2/core';
import {CRISES} from './../mocks/mock-crises';
import {Crisis} from './../crisis-center/crisis';

@Injectable()

export class CrisisService {
  getCrises() {
    return Promise.resolve(CRISES);
  }

  getCrisisSlowly() {
    return new Promise<Crisis[]>(resolve =>
      setTimeout(()=>resolve(CRISES), 1000)
    );
  }

  getCrisis(id: number | string) {
    return Promise.resolve(CRISES)
      .then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
}
