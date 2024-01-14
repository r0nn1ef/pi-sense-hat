
Module.register("temperature", {
    defaults: {
        text: "Hello World!"
    },
    getTemplate () {
        return "temperature.njk";
    },
    getTemplateData () {
        return this.config;
    }
});
