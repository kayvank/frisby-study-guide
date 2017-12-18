"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const Left = exports.Left = function (x) {
  this.__value = x;
};

const Right = exports.Right = function (x) {
  this.__value = x;
};

Left.prototype.map = function (f) {
  return this;
};

Right.of = function (x) {
  return new Right(x);
};

Right.prototype.map = function (f) {
  return Right.of(f(this.__value));
};