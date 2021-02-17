const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';

  if (Object.prototype.toString.call(date) === '[object Date]') {
    let seasons = [
      'winter', 'winter',
      'spring', 'spring', 'spring',
      'summer', 'summer', 'summer',
      'autumn', 'autumn', 'autumn',
      'winter'
    ]
    return seasons[date.getMonth()]
  }
  throw Error('ERROR')
};
