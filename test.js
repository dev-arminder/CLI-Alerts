const cliAlerts = require("./index.js");

// With Default Name
cliAlerts({
  type: "error",
  msg: "Error Msg"
});

cliAlerts({
  type: "success",
  msg: "SUccess Msg"
});

cliAlerts({
  type: "warning",
  msg: "Warning Msg"
});

cliAlerts({
  type: "info",
  msg: "INfo Msg"
});

// With Name
cliAlerts({
  type: "error",
  msg: "Error Msg",
  name: "Errrora"
});

cliAlerts({
  type: "success",
  msg: "SUccess Msg",
  name: "Problem"
});

cliAlerts({
  type: "warning",
  msg: "Warning Msg",
  name: "Careful"
});

cliAlerts({
  type: "info",
  msg: "INfo Msg",
  name: "Nothing"
});
