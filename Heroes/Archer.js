import Hero from "./Hero.js";

export default class Archer extends Hero {
  constructor(name) {
    super(name);
    this.type = "Archer";
    this.hp = 80;
    this.ability = "Headshot";
    this.armour = 2;
    this.evasion = 15;
  }



}
