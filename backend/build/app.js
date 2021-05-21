"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

var _notes = _interopRequireDefault(require("./routes/notes.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //settings

app.set('port', process.env.PORT || 3000); //middlewares

app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.use(_express["default"].json()); //routes

app.use('/api/users', _users["default"]);
app.use('/api/notes', _notes["default"]);
var _default = app;
exports["default"] = _default;