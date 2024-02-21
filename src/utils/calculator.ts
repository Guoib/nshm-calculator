import Role from "./role";

class Calculator {
  private user: Role;
  private enemy: Role;

  constructor(user: Role, enemy: Role) {
    this.user = user;
    this.enemy = enemy;
  }

  public calcDamage = (attacker: Role, defender: Role) => {
    const remainingAirShield = defender.calcActualAirShield(attacker);
    const damageBase = attacker.attack - remainingAirShield + attacker.restraint - defender.resist;
    const defenseRate = defender.calcActualDefenseRate(attacker);
    const resistElementalAttackRate = defender.calcActualResistElementalAttackRate();
    const criticalHitRate = attacker.calcActualCriticalHitRate(defender);
    const criticalHitHurtRate = attacker.calcActualCriticalHitHurtRate(defender);

    const damage =
      attacker.skillMultiplier *
      ((attacker.coefficient1 + attacker.coefficient2 * damageBase) * (1 - defenseRate) + attacker.coefficient2 * attacker.elementalAttack * (1 - resistElementalAttackRate)) *
      criticalHitRate *
      criticalHitHurtRate;

    return damage;
  };

  public attack = () => {
    return this.calcDamage(this.user, this.enemy);
  };

  public defend = () => {
    return this.calcDamage(this.enemy, this.user);
  };
}

export default Calculator;
