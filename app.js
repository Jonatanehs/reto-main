
require('colors');

const { ProductosTienda, Producto, Cliente } = require('./proy_modules/caritoCompras')
const { pausa, menu, recuperacion } = require(`./proy_modules/funciones.js`)

// Se declara una constante llamada main que contiene una funcion flecha
const main = async () => {

    let opt = ""

    // cliente y productosTienda contendra un valor nulo
    let cliente = null;
    let productosTienda = null

    // se limpia la consola 
    console.clear();
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` +
        `~~~~~~~~~~~~~~~`);
    console.log(`+                   Carrito de  compras                      ` +
        `         +`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` +
        `~~~~~~~~~~~~~~~`);


    // se llama a la funcion pausa mientras espera la respuesta del usuario 
    await pausa();


    // se crea un bucle do while 
    do {

        // se limpia la consola y opt contiene lo que esta en menu con una pausa 
        console.clear();
        opt = await menu();

        // se crea un switch y tiene como expresion opt 
        switch (opt) {

            // el caso tiene un string con 1 
            case '1':

                // se limpia la consola 
                console.clear();

                // productosTienda contiene una instancia de la clase ProductosTienda 
                productosTienda = new ProductosTienda;

                // se llama al metodo de la clase productosTienda 
                productosTienda.cargaArchivoProductos();

                // se crea una variable global contendra a getListaProductos 
                global.productosTienda = productosTienda.getListaProductos;

                // se llama a la funcion pausa con una espera 
                await pausa();
                break;

            // en el segundo caso se ejecutara si se pulsa 2 
            case '2':

                // se crea un try catch que permite manejar errores de manera controlada 
                try {

                    // si es falso que la variable global sea mayor que 0, se limpiara la consola e imprimira un mensaje 
                    if (!(global.productosTienda.length > 0)) {
                        console.clear();
                        console.log("Error: Debes cargar el archivo de productos primero.");

                        // se llama a la funcion pausa con una espera
                        await pausa();
                    } else {
                        // se limpia la consola e imprime un mensaje 
                        console.clear();
                        console.log(`----- Hacer Copia de Seguridad -----`);

                        // se llama al metodo hacerCopiaDeSeguridad 
                        productosTienda.hacerCopiaDeSeguridad();

                        // se llama a la funcion pausa con una espera
                        await pausa();
                    }

// si hay un error se limpia la consola y se imprime una consola 
                } catch (error) {
                    console.clear()
                    console.log(`Inicialice la opcion 1 para continuar`)

                    // se llama a la funcion pausa con una espera
                    await pausa();
                }

                break;
            case '3':

            // se crea un nuevo trycatch 
                try {

                    // si es falso que la variable global sea mayor que 0, ejecuta 
                    if (!(global.productosTienda.length > 0)) {

                        // se limpia la consola 
                        console.clear();

                        // se llama las dos funciones recuperacion y pausa con una espera 
                        await recuperacion();
                        await pausa();

                        // si pasa por falso ejecuta y limpia la consola e imprime un mensaje 
                    } else {
                        console.clear()
                        console.log(`ya estan cargados los archivos`)

                        // se llama a la funcion pausa con una espera
                        await pausa()
                    }

// si hay un error se limpia la consola y se imprime una consola 
                } catch (error) {
                    console.clear()
                    console.log(`Inicialice la opcion 1 para continuar`)

                    // se llama a la funcion pausa con una espera
                    await pausa();
                }
                break;
            case '4':
                try {

                    // si es falso que la variable global sea mayor que 0, se limpiara la consola e imprimira un mensaje
                    if (!(global.productosTienda.length > 0)) {
                        console.clear();
                        console.log("Error: Debes cargar el archivo de productos primero.");

                        // se llama a la funcion pausa con una espera
                        await pausa();

                        // si es falso ejecuta y limpia la consola 
                    } else {
                        console.clear()

                        // se llama al metodo mostrarProductos de la instancia de clase 
                        productosTienda.mostrarProductos();

                        // se llama al metodo de la clase productosTienda con una espera 
                        await productosTienda.agregarProducto(productosTienda); 

                        // se llama al metodo de la clase 
                        productosTienda.grabaArchivoProductos();

                        // se llama a la funcion pausa con una espera
                        await pausa();
                    }

// si hay un error se limpia la consola y se imprime una consola 
                } catch (error) {
                    console.clear();
                    console.log(`Inicialice la opcion 1 para continuar`);

                    // se llama a la funcion pausa con una espera
                    await pausa();
                }
                break;
            case '5':
                try {

                    // si es falso que la variable global sea mayor que 0, se limpiara la consola e imprimira un mensaje
                    if (!(global.productosTienda.length > 0)) {
                        console.clear();
                        console.log("Error: Debes cargar el archivo de productos primero.");

                        // se llama a la funcion pausa con una espera
                        await pausa();

                        // si es falsa ejecuta y limpia la consola 
                    } else {
                        console.clear();
                        console.log(`----- Eliminar producto -----`);

                        // se llama al metodo de la clase ProductosTienda
                        productosTienda.mostrarProductos();

                        // se hace una espera al metodo de la clase ProductosTienda 
                        await productosTienda.eliminarUnProducto();

                        // se hace una espera al metodo de la clase ProductosTienda 
                        await productosTienda.eliminarProducto();

                        // se llama a la funcion pausa con una espera
                        await pausa();
                    }
                }
// si hay un error se limpia la consola y se imprime una consola 
                catch (error) {
                    console.clear();
                    console.log(`Inicialice la opcion 1 para continuar`);

                    // se llama a la funcion pausa con una espera
                    await pausa();
                }


                break;
            case '6':
                try {

                    // si es falso que la variable global sea mayor que 0, se limpiara la consola e imprimira un mensaje
                    if (!(global.productosTienda.length > 0)) {
                        console.clear();
                        console.log("Error: Debes cargar el archivo de productos primero.");

                        // se llama a la funcion pausa con una espera
                        await pausa();

                        // si es falso se ejecuta y limpia la consola 
                    } else {
                        console.clear();

                        // se crea una nueva instancia de clase y se guardara en cliente 
                        cliente = new Cliente();
                        console.log(`----- Comprar productos -----`);

                        // se hace una espera y se llama al metodo de la clase 
                        await cliente.solicitarNombre();

                        // se hace una espera y se llama al metodo de la clase 
                        await cliente.solicitarDocumento();

                        // se hace una espera y se llama al metodo de la clase 
                        await cliente.solicitarDireccion();

                        // se limpia la consola
                        console.clear();

                        // se llama al metodo de la clase ProductosTienda 
                        productosTienda.mostrarProductos();

                        // se hace una espera y se llama al metodo de la clase 
                        await cliente.realizarCompra(productosTienda);

                        // se llama a la funcion pausa con una espera
                        console.log();
                        await pausa();
                    }

// si hay un error se limpia la consola y se imprime una consola 
                } catch (error) {
                    console.clear();
                    console.log(`Inicialice la opcion 1 para continuar`);

                    // se llama a la funcion pausa con una espera
                    await pausa();
                }
                break;

            case '7':
                console.clear();
                console.log(`----- Generar Factura -----`);

                // si cliente se ejecuta y realiza una pausa llamando al metodo 
                if (cliente) {
                    await cliente.imprimirFactura();
                } else {
                    console.log('Primero realiza una compra para generar la factura.');
                }

                // se llama a la funcion pausa con una espera
                await pausa();
                break;
            case '0':
                console.log("Gracias por ingresar, que tenga un feliz dia");
                break;

            // si no se cumple ningun caso se ejecuta el default 
            default:

            // si opt es mayor o igual a 8 imprimira un mensaje en consola 
                if (opt >= '8') {
                    console.log(`Opción no válida. Por favor seleccione 1 a 7.`);
                } else {
                    console.log(`Opción no válida. Por favor seleccione 0 a 7.`);
                }
        }

// si opt es distina a 0 se repetira el bucle 
    } while (opt !== '0');

}
main();