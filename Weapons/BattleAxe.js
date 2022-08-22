import Weapon from "./Weapon.js";

export default class BattleAxe extends Weapon {
  constructor() {
    super();
    this.name = "BattleAxe";
    this.whoCanUse = ["Warrior"];
    this.minDamage = 12;
    this.maxDamage = 15;
    this.chanceOfSuccess = 92;
  }
}
