import Hero from "./Hero.js";

export default class Rogue extends Hero {
  constructor(name) {
    super(name);
    this.type = "Rouge";
    this.hp = 80;
    this.ability = "Dodge";
    this.armour = 3;
    this.evasion = 30;
  }


}
