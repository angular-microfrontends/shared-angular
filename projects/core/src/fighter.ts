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

  unusedExperience;

  totalExperience = 0;

  get usedExperience(): number {
    return this.totalExperience - this.unusedExperience;
  }

  /**
   * Support for random level up.
   */
  private attributes: Attribute[] = [];

  constructor(exp: number = 0) {
    this.unusedExperience = exp;

    this.attributes.push(this.agility);
    this.attributes.push(this.constitution);
    this.attributes.push(this.dexterity);
    this.attributes.push(this.strength);

    this.randomLevelUp();
  }

  private randomLevelUp(): void {
    while (this.unusedExperience > 0) {
      const attribute = this.randomAttribute();
      this.totalExperience += attribute.cost;
      this.unusedExperience -= Math.min(this.unusedExperience, attribute.cost);
      attribute.increase();
    }
  }

  private randomAttribute(): Attribute {
    const candidates: Attribute[] = [];
    this.attributes.forEach((attribute) => {
      if (attribute.cost <= this.unusedExperience) {
        candidates.push(attribute);
      }
    });
    // last increase even if not enough experience
    if (candidates.length === 0) {
      candidates.push(...this.attributes);
    }
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  heal() {
    this.health = this.maxHealth;
  }

  experience(amount: number) {
    const newUnused = Math.max(this.unusedExperience + amount, 0);
    this.totalExperience += newUnused - this.unusedExperience;
    this.unusedExperience = newUnused;
  }
}
