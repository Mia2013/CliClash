export default class Arena {
  tournament(hero1, hero2) {
    let counter = 1;
    while (hero1.getHp() > 0 && hero2.getHp() > 0) {
      if (this.whoStartTheFight()) {
        this.fight(hero1, hero2, counter);
      } else {
        this.fight(hero2, hero1, counter);
      }
      hero1.setDefaultValueAfterUseAbility();
      hero2.setDefaultValueAfterUseAbility();
      counter++;
    }
  }

  getFinalDamage(anotherHero, initialDamage) {
    if (initialDamage > 0) {
      const finalDamage =
        initialDamage - Math.floor(anotherHero.getArmour() / 3);
      return finalDamage;
    }
    return 0;
  }

  whoStartTheFight() {
    return Math.random() < 0.5;
  }

  fight(hero1, hero2, counter) {
    console.table([
      [counter, "round", "start"],
      [hero1.getName(), "hp", hero1.getHp()],
      [hero2.getName(), "hp", hero2.getHp()],
      ["first hit", hero1.getName()],
    ]);

    const hero1TotalDamage = hero2.useWeapon();
    const hero2TotalDamage = hero1.useWeapon();

    let decreaseHero1Hp = this.getFinalDamage(hero1, hero1TotalDamage);
    let decreaseHero2Hp = this.getFinalDamage(hero2, hero2TotalDamage);

    if (hero1TotalDamage > 0) {
      hero1.chanceOfEvasion() ? (decreaseHero1Hp = 0) : decreaseHero1Hp;
    }
    if (hero2TotalDamage > 0) {
      hero2.chanceOfEvasion() ? (decreaseHero2Hp = 0) : decreaseHero2Hp;
    }

    hero2.decreaseHp(decreaseHero2Hp);

    let winner;

    if (hero2.getHp() <= 0) {
      winner = hero1.getName();
    } else {
      hero1.decreaseHp(decreaseHero1Hp);
    }

    if (hero1.getHp() <= 0) {
      winner = hero2.getName();
    }

    console.table([
      [counter, "round", "end"],
      [
        hero1.getName(),
        "hp",
        hero1.getHp(),
        "total damage",
        hero1TotalDamage,
        "lost hp",
        -decreaseHero1Hp,
      ],
      [
        hero2.getName(),
        "hp",
        hero2.getHp(),
        "total damage",
        hero2TotalDamage,
        "lost hp",
        -decreaseHero2Hp,
      ],
    ]);
    if (winner) {
      console.table(["winner", winner]);
    }
  }
}
