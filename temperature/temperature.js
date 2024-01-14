
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
    getDom () {
        const wrapper = document.createElement("div");
        const rand = Math.random().toString();
        wrapper.appendChild(document.createTextNode(rand));
        return wrapper;
    }
});
