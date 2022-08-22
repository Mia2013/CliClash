'use strict'

import Warrior from "./Heroes/Warrior.js";
import Priest from "./Heroes/Priest.js";
import Mage from "./Heroes/Mage.js";
import Rogue from "./Heroes/Rogue.js";
import Archer from "./Heroes/Archer.js";

import Weapon from "./Weapons/Weapon.js"
import Sword from "./Weapons/Sword.js"
import Dagger from "./Weapons/Dagger.js"
import WarHammer from "./Weapons/WarHammer.js"
import BattleAxe from "./Weapons/BattleAxe.js"
import Bow from "./Weapons/Bow.js"
import Wand from "./Weapons/Wand.js"



const bela = new Warrior("Béla");
console.log(bela.equipWeapon(new WarHammer()) );
const pista = new Mage("Pista");
console.log(pista.equipWeapon(new Sword()) );
const pistaa = new Rogue("Pista");
console.log(pistaa.equipWeapon(new Sword()) );
console.log("evasion " +pistaa.getEvasion())