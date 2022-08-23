"use strict";

import Warrior from "./Heroes/Warrior.js";
import Priest from "./Heroes/Priest.js";
import Mage from "./Heroes/Mage.js";
import Rogue from "./Heroes/Rogue.js";
import Archer from "./Heroes/Archer.js";

import Weapon from "./Weapons/Weapon.js";
import Sword from "./Weapons/Sword.js";
import Dagger from "./Weapons/Dagger.js";
import WarHammer from "./Weapons/WarHammer.js";
import BattleAxe from "./Weapons/BattleAxe.js";
import Bow from "./Weapons/Bow.js";
import Wand from "./Weapons/Wand.js";

import Arena from "./Arena/Arena.js";

const bela = new Priest("Béla");
bela.equipWeapon(new WarHammer());
const pista = new Warrior("Pista");
pista.equipWeapon(new Sword());
const arena = new Arena();
arena.tournament(bela, pista);
