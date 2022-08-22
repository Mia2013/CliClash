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

  decreaseHp(number) {
    return (this.hp -= number);
  }

  useAbility() {
    return null;
  }

  setDefaultValueAfterUseAbility() {
    return null;
  }

  chanceOfUseAbility() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= 10) {
      return true;
    }
    return false;
  }

  equipWeapon(weapon) {
    let plusDamage = 0;
    if (this.chanceOfUseAbility()) {
      this.useAbility();
      if (Object.keys(this.useAbility())[0] === "damage") {
        plusDamage = this.useAbility().damage;
      }
    }

    const canThisHeroUseTheWeapon = weapon.whoCanUse.filter(
      (heroType) => heroType === this.type
    );
    if (canThisHeroUseTheWeapon.length === 1) {
      return weapon.damageCalc() + plusDamage;
    }
    return 0;
  }
}
