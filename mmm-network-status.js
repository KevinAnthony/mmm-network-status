/* eslint-disable no-undef,guard-for-in,no-restricted-syntax */
// eslint-disable-next-line no-undef
Module.register("MMM-Network-Status", {
  defaults: {
  },
  start: function () {
    console.log(`Starting module: ${this.name}`);
  },
  getDom: function () {
    let wrapper = document.createElement("div")
    wrapper.className = "BaseWrapper"
    wrapper.id = "wrapper"

    return wrapper
  },
  getStyles() {
    return ["default.css", "font-awesome.css"];
  },

  getScripts() {
    return [];
  },

  getTranslations() {
    return false;
  },
  notificationReceived: function (notification) {
    switch (notification) {
      case "DOM_OBJECTS_CREATED":
    }
  },
  socketNotificationReceived: function (notification, payload) {
    switch (notification) {
    }
  },
})
