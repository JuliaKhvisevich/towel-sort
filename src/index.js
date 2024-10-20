
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  return matrix.reduce((acc, cur, i) => {
    cur.sort((a, b) => !(i % 2) ? a - b : b - a).forEach(e => acc.push(e));
    return acc;
  }, []);
};