const argv = require("./config/yargs").argv;
const colors = require("colors");

const { crearArchivo, ListarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    ListarTabla(argv.base, argv.limite)
      .then((archivo) => console.log(archivo))
      .catch((e) => console.log(e));
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Se creó el archivo: ${archivo}`))
      .catch((e) => console.log(e));
    break;
  default:
    console.log("No existe el comando");
    break;
}
