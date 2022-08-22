import Hero from "./Hero.js";

export default class Warrior extends Hero {
  constructor(name) {
    super(name);
    this.type = "Warrior";
    this.hp = 100;
    this.ability = "Armour";
    this.armour = 5;
    this.evasion = 20;
    this.weapon;
  }

  useAbility() {
    this.armour += 10;
    return { armour: this.armour };
  }

  setDefaultValueAfterUseAbility() {
    return (this.armour = 5);
  }
}
