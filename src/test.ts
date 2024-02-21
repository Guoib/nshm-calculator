import { nanwenxue } from "./data/boss";
import { Calculator, Role } from "./utils";

const me = new Role({
  attack: 4483,
  restraint: 2303,
  breakAirShield: 450,
  breakDefense: 1002,
  elementalAttack: 926,
  criticalHit: 1118,
  criticalHitHurtRate: 1.919,
  skillMultiplier: 0.6,
});

const monster = new Role({
  defense: 5000,
  airShield: 1000,
  resist: 2500,
  resistElementalAttack: 0,
});

const nwx = new Role(nanwenxue);

const calculator = new Calculator(me, monster);

const damage = calculator.calcDamage(me, nwx);

console.log(damage);
