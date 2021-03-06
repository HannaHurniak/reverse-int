module.exports = function reverse (n) {
  n = n + '';
  let res = n.split('').reverse().join('');
  let res1 = parseInt(res, 10);
  return res1;
}
