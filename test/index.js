"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("./public/api"));
var express_1 = __importDefault(require("express"));
var checkLogin_1 = require("./public/checkLogin");
var app = express_1.default();
var port = 3030;
app.use('/public', express_1.default.static('public'));
app.get('/api/checkLogin', function (req, res) {
    res.setHeader('Content-Type', 'application/typescript');
    res.end(checkLogin_1.Login);
});
app.get('/api/todo', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(api_1.default, null, 3));
});
app.listen(port);
if (port == 3030) {
    console.log("Running on port", port);
}
