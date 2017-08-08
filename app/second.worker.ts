import 'globals'; // necessary to bootstrap tns modules on the new thread

declare function postMessage(message: any, targetOrigin?: string, transfer?: any[]): void;

onmessage = msg => {
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
            postMessage({ error: `Action not implemented common worker: ${msg.data.action}`});
            break;
    }
};

onerror = error => {
    postMessage({ error: 'on common worker error ' + error});
};

