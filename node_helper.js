const NodeHelper = require("node_helper");
const nodeimu = require("nodeimu/index.js");
const IMU = new nodeimu.IMU();

module.exports = NodeHelper.create({
    start: function(){},
    socketNotificationReceived: function (notification, payload){
        let self = this;

        switch ( notification ) {
            case "SENSE_HAT_READ_DATA":
                const rand = Math.floor(Math.random() * 1000).toString();
                const payload = "Random number: " + rand + ".";
                this.sendSocketNotification('SENSE_HAT_DATA',payload);
                break;
            default:
                // do nothing.
        }
    },
});