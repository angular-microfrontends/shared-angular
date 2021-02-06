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

  attack(): void {
    // TO DO
  }

  buildChallenger(): void {
    this.challenger = new Fighter(this.player.totalExperience);
    this.challenger.heal();
  }

  runAway(): void {
    this.challenger = undefined;
    this.player.heal();
    this.player.experience(-1);
  }
}
