import { Component } from "@angular/core";

@Component({
  template: `
    <Label text="alabala"></Label>
  `
})
export class AppComponent {
    constructor() {
        let worker1;
        let worker2;
        let worker3;

        if (global.TNS_WEBPACK) {
            const workerTemp = require('worker-loader!./first.worker.js');
            const workerTemp2 = require('worker-loader!./second.worker.js');
            const workerTemp3 = require('worker-loader!./third.worker.js');

            worker1 = typeof workerTemp === "function" ? 
                workerTemp():
                workerTemp;

            worker2 = typeof workerTemp2 === "function" ? 
                workerTemp2():
                workerTemp2;

            worker3 = typeof workerTemp3 === "function" ? 
                workerTemp3():
                workerTemp3;

        } else {
            worker1 = new Worker('./first.worker');
            worker2 = new Worker('./second.worker');
        }

    }

}
