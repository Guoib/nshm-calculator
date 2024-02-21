import { Attributes } from "../types";

const DEFAULT_ROLE_ATTR: Attributes = {
  skillMultiplier: 1,
  coefficient1: 0,
  coefficient2: 1,
  attack: 5500,
  airShield: 800,
  breakAirShield: 800,
  defense: 4000,
  breakDefense: 2000,
  restraint: 500,
  resist: 2000,
  elementalAttack: 1000,
  resistElementalAttack: 0,
  criticalHit: 1300,
  resistCriticalHit: 500,
  criticalHitHurtRate: 1.9,
  resistCriticalHitHurtRate: 0,
  withstand: 700,
  hit: 700
}

class Role implements Attributes {
  public skillMultiplier: number;
  public coefficient1: number;
  public coefficient2: number;
  public attack: number;
  public airShield: number;
  public breakAirShield: number;
  public defense: number;
  public breakDefense: number;
  public restraint: number;
  public resist: number;
  public elementalAttack: number;
  public resistElementalAttack: number;
  public criticalHit: number;
  public resistCriticalHit: number;
  public criticalHitHurtRate: number;
  public resistCriticalHitHurtRate: number;
  public withstand: number;
  public hit: number;

  constructor(attrs: Partial<Attributes>) {
    this.skillMultiplier = DEFAULT_ROLE_ATTR.skillMultiplier
    this.coefficient1 = DEFAULT_ROLE_ATTR.coefficient1
    this.coefficient2 = DEFAULT_ROLE_ATTR.coefficient2
    this.attack = DEFAULT_ROLE_ATTR.attack
    this.airShield = DEFAULT_ROLE_ATTR.airShield
    this.breakAirShield = DEFAULT_ROLE_ATTR.breakAirShield
    this.defense = DEFAULT_ROLE_ATTR.defense
    this.breakDefense = DEFAULT_ROLE_ATTR.breakDefense
    this.restraint = DEFAULT_ROLE_ATTR.restraint
    this.resist = DEFAULT_ROLE_ATTR.resist
    this.elementalAttack = DEFAULT_ROLE_ATTR.elementalAttack
    this.resistElementalAttack = DEFAULT_ROLE_ATTR.resistElementalAttack
    this.criticalHit = DEFAULT_ROLE_ATTR.criticalHit
    this.resistCriticalHit = DEFAULT_ROLE_ATTR.resistCriticalHit
    this.criticalHitHurtRate = DEFAULT_ROLE_ATTR.criticalHitHurtRate
    this.resistCriticalHitHurtRate = DEFAULT_ROLE_ATTR.resistCriticalHitHurtRate
    this.withstand = DEFAULT_ROLE_ATTR.withstand
    this.hit = DEFAULT_ROLE_ATTR.hit

    this.setAttributes(attrs)
  }

  public setAttributes = (attrs: Partial<Attributes>) => {
    Object.entries(attrs).forEach((item) => {
      const [key, value] = item as [keyof Attributes, number]
      this[key] = value
    })
  }

  /**
   * 实际命中率
   */
  public calcActualHitRate(defender: Role) {
    /**
     * @todo 默认固定返回95%命中率
     */
    return 0.95
  }

  /**
   * 实际暴击率
   */
  public calcActualCriticalHitRate(defender: Role) {
    /**
     * @todo 默认固定返回50%暴击率
     */
    return 0.5
  }

  /**
   * 实际暴击伤害
   */
  public calcActualCriticalHitHurtRate(defender: Role) {
    /**
     * @todo 默认固定返回180%暴击伤害
     */
    return 1.8
  }

  /**
   * 实际防御减免率
   */
  public calcActualDefenseRate(attacker: Role) {
    const actualDefense = this.defense - attacker.breakDefense
    return actualDefense / (actualDefense + 2860)
  }

  /**
   * 实际元素抗性减免
   */
  public calcActualResistElementalAttackRate() {
    return this.resistElementalAttack / (this.resistElementalAttack + 530)
  }

  /**
   * 剩余气盾值
   */
  public calcActualAirShield(attacker: Role) {
    const criticalAirShield = this.airShield / 3

    if (attacker.breakAirShield > this.airShield) {
      return 0
    } else if (attacker.breakAirShield >= criticalAirShield) {
      return 0.5 * (this.airShield - attacker.breakAirShield)
    } else {
      return this.airShield - 2 * attacker.breakAirShield
    }
  }
}

export default Role