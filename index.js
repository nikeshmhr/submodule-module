export function sum(n1, n2) {
  return n1 + n2;
}

export function sub(n1, n2) {
  return n1 - n2;
}

export function multiply(n1, n2) {
  return n1 * n2;
}

export function divide(n1, n2) {
  return n1 / n2;
}

export function mod(n1, n2) {
  return n1 % n2;
}

export function isOdd(n1) {
  return mod(n1, 2) === 1;
}

export function isEven(n1) {
  return mod(n1, 2) === 0;
}

export function isPrime(n1) {
  return '';
}

export function isLeapYear(n1) {
  return '';
}

export function isNatural(n1) {
  return false;
}

export function isImaginary(n1) {
  return false;
}

export function isDragon() {
  return false;
}

export function isGhost() {
  return true;
}

export function isAngel() {
  return false;
}

export function isRoot() {
  return true;
}

export function pow(n1, n2) {
  return Math.pow(n1, n2);
}

export function sqrt(n1) {
  return Math.sqrt(n1);
}

export function random(max = 1) {
  return Math.random() * max;
}

export function max(n1, n2) {
  return Math.max(n1, n2);
}
