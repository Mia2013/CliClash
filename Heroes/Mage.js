import Hero from "./Hero.js";

export default class Mage extends Hero {
  constructor(name) {
    super(name);
    this.type = "Mage";
    this.hp = 70;
    this.ability = "Firestorm";
    this.armour = 1;
    this.evasion = 5;
  }

  useAbility() {
    return {damage: 20};
  }
}
