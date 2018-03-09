'use strict';

var values = require('../helpers/values');

module.exports = function whereNotBetween(key, array) {
    var items = values(this.items);
    var comparisonOne = array[0];
    var comparisonTwo = array[1];
    var collection = items.filter(function (item){
      if ( item[key] <= comparisonOne) {
        return  item[key] <= comparisonOne;
      }
      if (item[key] >= comparisonTwo) {
        return (item[key] >= comparisonTwo);
      }


    });
  return new this.constructor(collection);
};
