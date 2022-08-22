import Weapon from "./Weapon.js";

export default class Wand extends Weapon {
  constructor() {
    super();
    this.name = "Wand";
    this.whoCanUse = ["Mage"];
    this.minDamage = 9;
    this.maxDamage = 15;
    this.hitChance = 97;
  }
}
