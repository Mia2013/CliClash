import Weapon from "./Weapon.js";

export default class WarHammer extends Weapon {
  constructor() {
    super();
    this.name = "War Hammer";
    this.whoCanUse = ["Priest"];
    this.minDamage = 10;
    this.maxDamage = 15;
    this.hitChance = 93;
  }
}
