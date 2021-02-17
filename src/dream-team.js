const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (Array.isArray(array) && array.length !== 0) {
    return array.map((membersName) => {
      if (typeof membersName === 'string') {
        return membersName.split('').find((letter) => letter !== ' ').toUpperCase()
      }
    }).sort().join('')
  }
  return false;
};
