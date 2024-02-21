export interface Attributes {
  /**
   * 技能倍率
   */
  skillMultiplier: number;

  /**
   * 系数1
   */
  coefficient1: number;

  /**
   * 系数2
   */
  coefficient2: number;

  /**
   * 攻击
   */
  attack: number;

  /**
   * 气盾
   */
  airShield: number;

  /**
   * 破盾
   */
  breakAirShield: number;

  /**
   * 防御
   */
  defense: number;

  /**
   * 破防
   */
  breakDefense: number;

  /**
   * 克制
   */
  restraint: number;

  /**
   * 抵御
   */
  resist: number;

  /**
   * 元素攻击
   */
  elementalAttack: number;

  /**
   * 元素抵御
   */
  resistElementalAttack: number;

  /**
   * 会心
   */
  criticalHit: number;

  /**
   * 会心抵御
   */
  resistCriticalHit: number;

  /**
   * 会心伤害
   */
  criticalHitHurtRate: number;

  /**
   * 会心伤害抵御
   */
  resistCriticalHitHurtRate: number;

  /**
   * 格挡
   */
  withstand: number;

  /**
   * 命中
   */
  hit: number;
}
