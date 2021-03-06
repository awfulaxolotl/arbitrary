/**
 * Real number from 0 (inclusive) to 1 (exclusive).
 *
 * In other words:
 *
 *     n ∋ [0, 1)
 */
export type Unit = number

/**
 * Minimum unit real
 *
 * Zero.
 */
export const N = 0

/**
 * Maximum unit real
 *
 * Largest JS number below 1.
 */
export const M = 1 - Number.EPSILON

/**
 * Is a value a unit real?
 *
 * A unit real is a number `n` where:
 *
 *     n ∋ [0, 1)
 *
 * @param n value to check
 */
export function isUnit(n: any): n is Unit {
  return typeof n === 'number' && n >= 0 && n < 1
}
