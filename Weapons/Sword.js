import Weapon from "./Weapon.js";

export default class Sword extends Weapon {
  constructor() {
    super();
    this.name = "Sword";
    this.whoCanUse = ["Warrior", "Priest", "Mage", "Rouge", "Archer"];
    this.damage = [8, 12];
    this.chanceOfSuccess = 90;
  }
}
