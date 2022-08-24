export default class Arena {
  tournament(hero1, hero2) {
    let counter = 1;
    let fightRounds = [];
    while (hero1.getHp() > 0 && hero2.getHp() > 0) {
      if (this.whoStartTheFight()) {
        fightRounds.push(this.fight(hero1, hero2, counter));
      } else {
        fightRounds.push(this.fight(hero2, hero1, counter));
      }
      counter++;
    }

    return fightRounds;
  }

  whoStartTheFight() {
    return Math.random() < 0.5;
  }

  fight(hero1, hero2, counter) {
    const firstHit = hero1.getName();
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
        firstHit,
        hero1,
        hero2,
        hero1Attacking,
        hero2Attacking,
        winner
      )
    );

    return {
      counter,
      firstHit,
      hero1,
      hero2,
      hero1Attacking,
      hero2Attacking,
      winner,
    };
  }

  displayTable(
    counter,
    firstHit,
    hero1,
    hero2,
    hero1Attacking,
    hero2Attacking,
    winner
  ) {
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
        firstHit,
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
