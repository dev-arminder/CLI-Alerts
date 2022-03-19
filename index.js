/**
 * Cli Alerts.
 *
 * Cross platform CLI Alerts with colors &amp; colored symbols for success, info, warning, error. Work on macOS, Linux, and Windows.
 *
 *
 */
const chalk = require("chalk");
const sym = require("log-symbols");
const log = console.log;
const green = chalk.green;
const greenI = chalk.green.bold.inverse;
const orange = chalk.keyword("orange");
const orangeI = chalk.keyword("orange").bold.inverse;
const red = chalk.red;
const redI = chalk.red.bold.inverse;
const blue = chalk.blue;
const blueI = chalk.blue.bold.inverse;

module.exports = options => {
  const defaultOptions = {
    type: `error`,
    msg: `You forgot to define Options`,
    name: null
  };
  const opt = { ...defaultOptions, ...options };
  const { type, msg, name } = opt;
  const printName = name ? name.toUpperCase() : type.toUpperCase();

  if (type === "success") {
    log(`\n${sym.success} ${greenI(` ${printName} `)} ${green(msg)}\n`);
  }

  if (type === "warning") {
    log(`\n${sym.warning} ${orangeI(` ${printName} `)} ${orange(msg)}\n`);
  }

  if (type === "error") {
    log(`\n${sym.error} ${redI(` ${printName} `)} ${red(msg)}\n`);
  }

  if (type === "info") {
    log(`\n${sym.info} ${blueI(` ${printName} `)} ${blue(msg)}\n`);
  }
};
