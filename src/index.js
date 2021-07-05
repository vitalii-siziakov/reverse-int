module.exports = function reverse (n) {
  let nS = String(Math.abs(n));
  let nSresult = '';

  for (let i = nS.length-1; i >= 0 ; i--) {
    nSresult += nS[i];
  };

  return Number(nSresult);
};
