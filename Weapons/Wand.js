import Weapon from "./Weapon.js";

export default class Wand extends Weapon {
  constructor() {
    super();
    this.name = "Wand";
    this.whoCanUse = ["Mage"];
    this.damage = [9, 15];
    this.chanceOfSuccess = 97;
  }
}
