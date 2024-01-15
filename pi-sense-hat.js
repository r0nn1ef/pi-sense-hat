const nodeimu = require("nodeimu");

Module.register("pi-sense-hat", {
    defaults: {
        text: "Hello World!"
    },
    start () {
        Log.info(`Starting module: ${this.name}`);
        this.updateDom();
        setInterval( () => {
            this.updateDom();
        }, 1000);
    },
    getScripts () {
        return ["node_modules/nodeimu/index.js"];
    },
    getDom () {
        const wrapper = document.createElement("div");
        const rand = Math.floor(Math.random() * 1000).toString();
        const IMU = nodeimu.IMU();
        const data = IMU.getValueSync();
        wrapper.appendChild(document.createTextNode(data.temperature.toPrecision(1)));
        return wrapper;
    }
});