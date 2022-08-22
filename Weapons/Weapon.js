export default class Weapon {
  name;
  whoCanUse;
  damage;
  chanceOfSuccess;

  constructor() {
    this.name = "null";
    this.whoCanUse = [];
    this.damage = [];
    this.chanceOfSuccess = "null";
  }
}
