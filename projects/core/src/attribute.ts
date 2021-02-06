/**
 * Cost for the next level.
 */
const costs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 6, 12, 20, 30, 42, 56, 72, 90, 110];

export class Attribute {
  innerValue: number;

  constructor(value: number) {
    this.innerValue = value;
  }

  get cost(): number {
    return costs[this.value];
  }

  get value(): number {
    return this.innerValue;
  }

  increase(): void {
    this.innerValue += 1;
  }
}
