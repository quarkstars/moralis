"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _convert = require("./convert");
/**
 * Converts chainId to a hex if it is a number
 */


function verifyChainId(chainId) {
  if (typeof chainId === 'number') chainId = (0, _convert.fromDecimalToHex)(chainId);
  return chainId;
}

var _default = verifyChainId;
exports.default = _default;