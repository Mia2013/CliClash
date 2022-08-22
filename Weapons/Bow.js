import Weapon from "./Weapon.js";

export default class Bow extends Weapon {
  constructor() {
    super();
    this.name = "Bow";
    this.whoCanUse = ["Archer"];
    this.damage = [7, 12];
    this.chanceOfSuccess = 89;
  }
}
