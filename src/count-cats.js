const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix.length !== 0) {
    const answer = matrix.map((array) => {
      return array.filter((item) => {
        return item === '^^'
      });
    });

    return answer.map((array) => { return array.length }).reduce((a, b) => a + b);
  } return 0
}
