import Weapon from "./Weapon.js";

export default class BattleAxe extends Weapon {
  constructor() {
    super();
    this.name = "BattleAxe";
    this.whoCanUse = ["Warrior"];
    this.damage = [12, 15];
    this.chanceOfSuccess = 92;
  }
}
