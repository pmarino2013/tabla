# tabla con NodeJS

Tabla de multiplicar que utiliza Nodejs y Yargs para enviar parámetros por consola

```

Ejecutar: npm install
Ejecutar: npm install yargs
Ejecutar: npm install colors
```

## Ejecución con Nodejs
Para ejecutar las funciones tenemos dos comandos que pasar como argumento:
```

listar
crear
```
Luego indicamos la base y el límite
```

-b 5 => Decimos que la base de la tabla de multiplicar será 5
-l 10 => Decimos que el límite de la tabla será de 10
```

## Ejemplo:
node app listar -b 5 -l 5

```
==================
  Tabla del 5  
==================
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
```
