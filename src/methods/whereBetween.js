'use strict';

var values = require('../helpers/values');

module.exports = function whereBetween(key, array) {
    var items = values(this.items);
    var comparisonOne = array[0];
    var comparisonTwo = array[1];
    var collection = items.filter(function (item){
      if(comparisonTwo === undefined){
        return item[key] >= comparisonOne
      } else if (comparisonOne === undefined) {
        item[key] <= comparisonTwo;
      } else {
        return item[key] >= comparisonOne && item[key] <= comparisonTwo;
      }
    });
  return new this.constructor(collection);
};
