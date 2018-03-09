'use strict';

module.exports = function pagelists(key) {
  var step;
  var paglists = []
  for (step = 1; step < key+1; step++) {
  // Runs n times, with values of step 1 through n.
  paglists[step-1]= step;
};
return paglists;
};
