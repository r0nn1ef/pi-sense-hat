

Module.register("pi-sense-hat", {
    defaults: {
        text: "Hello World!"
    },
    sensorData: null,
    start () {
        Log.info(`Starting module: ${this.name}`);
        this.getSensorData();

    },
    getSensorData() {
        var self = this;
        setInterval( () => {
            self.sendSocketNotification("SENSE_HAT_READ_DATA");
            self.updateDom();
        }, 1000);
    },
    getScripts () {
        return [];
    },
    socketNotificationReceived(notification, payload) {
        switch ( notification ) {
            case "SENSE_HAT_DATA":
                this.sensorData = payload;
                break;
            default:
                // do nothing.
        }
    },

    getDom () {
        let self = this;
        const wrapper = document.createElement("div");
        const outStr = self.sensorData === null ? "Loading ..." : self.sensorData;
        wrapper.appendChild(document.createTextNode(outStr));
        return wrapper;
    }
});