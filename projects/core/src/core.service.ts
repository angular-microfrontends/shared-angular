import { Injectable } from '@angular/core';

import { Fighter } from './fighter';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  challenger?: Fighter;

  player = new Fighter();

  constructor() {
    this.player.heal();
  }
}
