'use strict';

module.exports = extractList;

// copied from https://github.com/pegjs/pegjs/blob/2005345/examples/css.pegjs#L27-L37
function extractList (list, index) {
  var result = [], i;

  for (i = 0; i < list.length; i++) {
    if (list[i][index] !== null) {
      result.push(list[i][index]);
    }
  }

  return result;
}
