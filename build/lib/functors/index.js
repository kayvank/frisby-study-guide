'use strict';

var _maybe = require('./maybe');

var m = _interopRequireWildcard(_maybe);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
  Maybe: Maybe,
  of: m.of
};