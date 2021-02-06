import { Attribute } from './attribute';

const HEALTH_MULTIPLIER = 10;

export class Fighter {
  health = 0;

  get maxHealth(): number {
    return this.constitution.value * HEALTH_MULTIPLIER;
  }

  agility = new Attribute(10);

  constitution = new Attribute(10);

  dexterity = new Attribute(10);

  strength = new Attribute(10);

  unusedExperience = 0;

  totalExperience = 0;

  get usedExperience(): number {
    return this.totalExperience - this.unusedExperience;
  }

  heal() {
    this.health = this.maxHealth;
  }
}
