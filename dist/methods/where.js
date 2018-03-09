'use strict';

var values = require('../helpers/values');

module.exports = function where(key, operator, value) {
  var comparisonOperator = operator;
  var comparisonValue = value;

  if (value === undefined) {
    comparisonValue = operator;
    comparisonOperator = '===';
  }

  var items = values(this.items);

  var collection = items.filter(function (item) {
    switch (comparisonOperator) {
      case '==':
        return item[key] === Number(comparisonValue) || item[key] === comparisonValue.toString();

      default:
      case '===':
        return item[key] === comparisonValue;

      case 'like' :
          return item[key].replace(/\s/g, '').toUpperCase().includes(comparisonValue.replace(/\s/g, '').toUpperCase());
      case 'like%' :
          return item[key].replace(/\s/g, '').toUpperCase().startsWith(comparisonValue.replace(/\s/g, '').toUpperCase());
      case '%like' :
          return item[key].replace(/\s/g, '').toUpperCase().endsWith(comparisonValue.replace(/\s/g, '').toUpperCase());
      case '==*' :
          return item[key].replace(/\s/g, '').toString().toUpperCase() === comparisonValue.replace(/\s/g, '').toString().toUpperCase();

      case '!=':
      case '<>':
        return item[key] !== Number(comparisonValue) && item[key] !== comparisonValue.toString();

      case '!==':
        return item[key] !== comparisonValue;

      case '<':
        return item[key] < comparisonValue;

      case '<=':
        return item[key] <= comparisonValue;

      case '>':
        return item[key] > comparisonValue;

      case '>=':
        return item[key] >= comparisonValue;

    }
  });
 return new this.constructor(collection);
};
