export default class Weapon {
  name;
  whoCanUse;
  minDamage;
  maxDamage;
  hitChance;

  constructor() {
    this.name = "null";
    this.whoCanUse = [];
    this.minDamage = "null";
    this.maxDamage = "null";
    this.hitChance = "null";
  }

  chanceOfSuccessCalc() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= this.hitChance) {
      return true;
    }
    return false;
  }

  damageCalc() {
    if (this.chanceOfSuccessCalc()) {
      const range = (min, max) =>
        [...Array(max - min + 1).keys()].map((i) => i + min);

      const arrayOfDamageNumbers = range(this.minDamage, this.maxDamage);
      const randomNumber = Math.floor(
        Math.random() * arrayOfDamageNumbers.length
      );

      return arrayOfDamageNumbers[randomNumber];
    }

    return 0;
  }
}
