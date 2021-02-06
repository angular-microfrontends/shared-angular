import { Component, Input } from '@angular/core';

import { Fighter } from '../fighter';

@Component({
  selector: 'core-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.sass'],
})
export class StatsComponent {
  @Input() fighter!: Fighter;

  @Input() showCosts = false;

  @Input() showExperience = false;

  get healthBar() {
    const perc = Math.ceil((100 * this.fighter.health) / this.fighter.maxHealth);
    let color;
    if (perc < 20) {
      color = 'red';
    } else if (perc < 50) {
      color = 'darkorange';
    } else {
      color = 'green';
    }
    return `linear-gradient(to right, ${color} ${perc}%, black ${perc}%, black)`;
  }
}
