import Weapon from "./Weapon.js";

export default class Dagger extends Weapon {
  constructor() {
    super();
    this.name = "Dagger";
    this.whoCanUse = ["Rouge"];
    this.damage = [4, 5];
    this.chanceOfSuccess = 98;
  }
}
