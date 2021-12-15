const checkHats = (n) => {
  if (n <= 1) {
    return 0;
  }

  let T = [];
  T[1] = 0;
  T[2] = 1;

  for (let i = 3; i <= n; i++) {
    T[i] = (i - 1) * (T[i - 1] + T[i - 2]);
  }

  return T[n];
};

module.exports = checkHats;
