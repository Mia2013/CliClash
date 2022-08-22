import Weapon from "./Weapon.js";

export default class Dagger extends Weapon {
  constructor() {
    super();
    this.name = "Dagger";
    this.whoCanUse = ["Rouge"];
    this.minDamage = 4;
    this.maxDamage = 5;
    this.hitChance = 98;
  }
}
