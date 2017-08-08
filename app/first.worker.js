"use strict";
exports.__esModule = true;
require("globals"); // necessary to bootstrap tns modules on the new thread
onmessage = function (msg) {
    postMessage("GREAT SUCESS !!!")
};
