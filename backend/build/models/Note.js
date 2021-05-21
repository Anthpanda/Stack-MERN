"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var noteSchema = new _mongoose.Schema({
  title: String,
  content: {
    type: String,
    required: true
  },
  author: String,
  date: {
    type: Date,
    "default": Date.now
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Note', noteSchema);

exports["default"] = _default;