const fs = require("fs");
const colors = require("colors");

const ListarTabla = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      return reject(`El valor ingresado ${base} no es un número`);
    }
    let data = "";

    console.log("==================".green);
    console.log(`  Tabla del ${base}  `.green);
    console.log("==================".green);
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    return resolve(data);
  });
};

const crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      return reject(`El valor ingresado ${base} no es un número`);
    }
    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}-limite-${limite}.txt`.green);
    });
  });
};

//para exportar la función y poder usarla en app.js
module.exports = {
  crearArchivo,
  ListarTabla,
};
