
Module.register("temperature", {
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
        return ["sensehat.js"];
    },
    getDom () {
        const wrapper = document.createElement("div");
        const rand = Math.floor(Math.random() * 1000).toString();
        const senseNode = SenseHatInNode();
        wrapper.appendChild(document.createTextNode(rand));
        return wrapper;
    }
});
