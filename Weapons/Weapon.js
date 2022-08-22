export default class Weapon {
  name;
  whoCanUse;
  minDamage;
  maxDamage;
  chanceOfSuccess;

  constructor() {
    this.name = "null";
    this.whoCanUse = [];
    this.minDamage = "null";
    this.maxDamage = "null";
    this.chanceOfSuccess = "null";
  }
}
