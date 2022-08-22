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
    const finalDamage = initialDamage - Math.floor(anotherHero.getArmour() / 3);
    return finalDamage;
  }

  whoStartTheFight() {
    return Math.random() < 0.5;
  }

  fight(hero1, hero2, counter) {
    console.table([
      ["start", counter, "round"],
      ["name", hero1.getName(), "hp", hero1.getHp()],
      ["name", hero2.getName(), "hp", hero2.getHp()],
      ["first hit", hero1.getName()],
    ]);

    const hero1TotalDamage = hero2.fightWithAnotherHero();
    const hero2TotalDamage = hero1.fightWithAnotherHero();

    const decreaseHero1Hp = this.getFinalDamage(hero1, hero1TotalDamage);
    const decreaseHero2Hp = this.getFinalDamage(hero2, hero2TotalDamage);
    
    if(hero1TotalDamage > 0){
        hero1.chanceOfEvasion() ? hero1TotalDamage = 0 : hero1TotalDamage;
    }
    if(hero2TotalDamage > 0){
        hero2.chanceOfEvasion() ? hero2TotalDamage = 0 : hero2TotalDamage;
    }

    hero1.decreaseHp(decreaseHero1Hp);
    hero2.decreaseHp(decreaseHero2Hp);

    console.table([
      ["end", counter, "round"],
      [
        "name",
        hero1.getName(),
        "hp",
        hero1.getHp(),
        "total damage",
        hero1TotalDamage,
        "lost hp",
        -decreaseHero1Hp,
      ],
      [
        "name",
        hero2.getName(),
        "hp",
        hero2.getHp(),
        "total damage",
        hero2TotalDamage,
        "lost hp",
        -decreaseHero2Hp,
      ],
    ]);
  }
}
