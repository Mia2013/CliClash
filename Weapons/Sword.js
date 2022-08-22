import Weapon from "./Weapon.js";

export default class Sword extends Weapon {
  constructor() {
    super();
    this.name = "Sword";
    this.whoCanUse = ["Warrior", "Priest", "Mage", "Rouge", "Archer"];
    this.minDamage = 8;
    this.maxDamage = 12;
    this.hitChance = 90;
  }
}
