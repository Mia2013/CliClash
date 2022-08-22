import Hero from "./Hero.js";

export default class Rogue extends Hero {
  constructor(name) {
    super(name);
    this.type = "Rouge";
    this.hp = 80;
    this.ability = "Dodge";
    this.armour = 3;
    this.evasion = 30;
    this.weapon = false;
  }

  useAbility() {
    this.evasion += 100;
    return { evasion: this.evasion };
  }

  setDefaultValueAfterUseAbility() {
    return (this.evasion = 30);
  }
}
