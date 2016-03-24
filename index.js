"use strict";

/**
 * Decrement a value towards 0.
 * Works for both negative and positive values.
 * @param {number} value
 * @param {number} amount - The amount to decrease for value to reach 0. Should be a positive value
 * @returns value +/- 1
 */
function spring(value, amount) {
  return value + Math.abs(value) / -value * (amount || 1);
};

module.exports = spring;
