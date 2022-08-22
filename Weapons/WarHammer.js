import Weapon from "./Weapon.js";

export default class WarHammer extends Weapon {
  constructor() {
    super();
    this.name = "War Hammer";
    this.whoCanUse = ["Priest"];
    this.damage = [10, 15];
    this.chanceOfSuccess = 93;
  }
}
