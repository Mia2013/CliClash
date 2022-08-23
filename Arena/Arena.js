export default class Arena {
  tournament(hero1, hero2) {
    let counter = 1;
    while (hero1.getHp() > 0 && hero2.getHp() > 0) {
      if (this.whoStartTheFight()) {
        this.fight(hero1, hero2, counter);
      } else {
        this.fight(hero2, hero1, counter);
      }
      counter++;
    }
  }

  whoStartTheFight() {
    return Math.random() < 0.5;
  }

  fight(hero1, hero2, counter) {
    const hero1Attacking = hero1.fightAnotherHero(hero2);
    let hero2Attacking;
    let winner;

    if (hero2.getHp() <= 0) {
      winner = hero1.getName();

      hero2Attacking = {
        name: hero1.getName(),
        startHp: hero1.getHp(),
        totalDamage: 0,
        decreaseDefensiveHeroHp: 0,
      };
    } else {
      hero2Attacking = hero2.fightAnotherHero(hero1);
    }

    if (hero1.getHp() <= 0) {
      winner = hero2.getName();
    }

    console.table(
      this.displayTable(
        counter,
        hero1,
        hero2,
        hero1Attacking,
        hero2Attacking,
        winner
      )
    );
  }

  displayTable(counter, hero1, hero2, hero1Attacking, hero2Attacking, winner) {
    const displayArray = [
      [`${counter}. round`],

      [
        "name",
        "start hp",
        "first hit",
        "total damage",
        "lost hp",
        "current hp",
        "winner",
      ],
      [
        hero1.getName(),
        hero2Attacking.startHp,
        hero1.getName(),
        hero2Attacking.totalDamage,
        -hero2Attacking.decreaseDefensiveHeroHp,
        hero1.getHp(),
        winner === hero1.getName() ? winner : "",
      ],
      [
        hero2.getName(),
        hero1Attacking.startHp,
        "",
        hero1Attacking.totalDamage,
        -hero1Attacking.decreaseDefensiveHeroHp,
        hero2.getHp(),
        winner === hero2.getName() ? winner : "",
      ],
    ];
    return displayArray;
  }
}
