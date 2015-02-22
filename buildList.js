'use strict';

var extractList = require('./extractList');

module.exports = buildList;

// copied from https://github.com/pegjs/pegjs/blob/2005345/examples/css.pegjs#L39-L41
function buildList (first, rest, index) {
  return (first !== null ? [first] : []).concat(extractList(rest, index));
}
