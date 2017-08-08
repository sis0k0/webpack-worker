"use strict";
exports.__esModule = true;
require("globals"); // necessary to bootstrap tns modules on the new thread
onmessage = function (msg) {
    switch (msg.data.action) {
        case 'init':
            break;
        case 'encode':
            postMessage({ resultType: 'encode' });
            break;
        case 'decode':
            postMessage({ resultType: 'decode' });
            break;
        default:
            postMessage({ error: "Action not implemented common worker: " + msg.data.action });
            break;
    }
};
onerror = function (error) {
    postMessage({ error: 'on common worker error ' + error });
};
