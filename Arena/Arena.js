class Arena {
  tournament(hero1, hero2) {}

  getFinalDamage(hero, initialDamage) {
    const finalDamage = initialDamage - Math.floor(hero.getArmour() / 3);
    return finalDamage;
  }
}

