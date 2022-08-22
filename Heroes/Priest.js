import Hero from "./Hero.js";

export default class Priest extends Hero {
  constructor(name) {
    super(name);
    this.type = "Priest";
    this.hp = 90;
    this.ability = "Heal";
    this.armour = 4;
    this.evasion = 20;
  }


  useAbility() {
    this.hp += 10;
    return {hp: this.hp};
  }


}
