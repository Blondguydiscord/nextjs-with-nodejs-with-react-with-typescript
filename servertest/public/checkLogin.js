"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
function Login(usernamein) {
    usernamein = document.getElementById("usernamein");
    if (usernamein == "jaosasa") {
        console.log('correct');
    }
    else {
        console.log('incorrect');
    }
}
exports.Login = Login;
