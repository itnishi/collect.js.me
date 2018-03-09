'use strict';

var values = require('../helpers/values');

module.exports = function orWhere(array) {

  var array_len  = array.length;
  var items = values(this.items);


  for (var i = 0; i < array_len; i++) {
    var comparisonOperator = array[i][1];
    var key = array[i][0];
    var comparisonValue = array[i][2];
    var pos = i

    var allcollection = [];

    if(i === pos) {
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
    }
    if (collection.length != 0) {
      return new this.constructor(collection)
    }

    //return new this.constructor(allcollection);
  }
//  return new this.constructor(allcollection)
};
