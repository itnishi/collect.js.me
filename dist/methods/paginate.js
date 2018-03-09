'use strict';

module.exports = function paginate(key) {

  if (key === undefined) {
    return Math.ceil(this.items.length / 2)
  }

  return  Math.ceil(this.items.length / key);

};
