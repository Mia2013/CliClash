export default class Hero {
  type;
  hp;
  ability;
  armour;
  evasion;
  weapon;

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

  getWeapon() {
    return this.weapon;
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

  chanceOfEvasion() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= this.evasion) {
      return true;
    }
    return false;
  }

  equipWeapon(weapon) {
    const canThisHeroUseTheWeapon = weapon.whoCanUse.filter(
      (heroType) => heroType === this.type
    );
    if (canThisHeroUseTheWeapon.length) {
      return (this.weapon = weapon);
    }
    return (this.weapon = false);
  }

  useWeapon() {
    let plusDamage = 0;
    if (this.chanceOfUseAbility()) {
      this.useAbility();
      if (Object.keys(this.useAbility())[0] === "damage") {
        plusDamage = this.useAbility().damage;
      }
    }
    if (this.weapon) {
      return this.weapon.damageCalc() + plusDamage;
    }

    return 0;
  }

  getFinalDamage(defensiveHero, initialDamage) {
    if (initialDamage > 0) {
      const finalDamage =
        initialDamage - Math.floor(defensiveHero.getArmour() / 3);
      return finalDamage;
    }
    return 0;
  }

  fightAnotherHero(defensiveHero) {
    const startHp = defensiveHero.getHp();
    const totalDamage = this.useWeapon();
    let decreaseDefensiveHeroHp = this.getFinalDamage(
      defensiveHero,
      totalDamage
    );
    if (totalDamage > 0) {
      defensiveHero.chanceOfEvasion()
        ? (decreaseDefensiveHeroHp = 0)
        : decreaseDefensiveHeroHp;
    }

    defensiveHero.decreaseHp(decreaseDefensiveHeroHp);
    this.setDefaultValueAfterUseAbility();

    const dataForDisplay = {
      name: defensiveHero.getName(),
      startHp,
      totalDamage,
      decreaseDefensiveHeroHp,
    };

    return dataForDisplay;
  }
}
