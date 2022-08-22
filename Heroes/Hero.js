export default class Hero {
  type;
  hp;
  ability;
  armour;
  evasion;

  constructor(name) {
    this.name = name;
  }

  getType() {
    return this.type;
  }
  getName() {
    return this.name;
  }
  getHp() {
    return this.hp;
  }
  getAbility() {
    return this.ability;
  }
  getArmour() {
    return this.armour;
  }
  getEvasion() {
    return this.evasion;
  }


  equipWeapon(weapon) {

    }

  }
