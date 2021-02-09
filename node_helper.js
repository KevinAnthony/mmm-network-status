const nodeHelper = require("node_helper");

module.exports = nodeHelper.create({
  socketNotificationReceived: function (notification, payload) {
    switch (notification) {
      case "NETSTAT_INIT":

    }
  },
})
