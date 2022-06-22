module.exports = function reverse (n) {
  return +String(n).replace(/\D/g, '').split('').reverse().join('');
}
