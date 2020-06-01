const opts = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command("listar", "listar archivo de multiplicación", opts)
  .command("crear", "Genera archivo con la tabla", opts)
  .help().argv;

module.exports = {
  argv,
};
