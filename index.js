'use strict';

var exported = [
  'buildList',
  'extractList',
];

exported.forEach(exportName);

function exportName (name) {
  module.exports[name] = require('./' + name);
}
