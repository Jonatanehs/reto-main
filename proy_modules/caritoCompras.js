/*Se crea una constante fs que se solicita al modulo de nodejs file system que 
interectua con sistemas de archivo
*/
const fs = require('fs');


//Importa un modulo de node js que permite la interaccion del usuario con la consola
const readLine = require('readline').createInterface({
    input: process.stdin, //Establece una entrada a la interfaz
    output: process.stdout //Establece una salida de la interfaz
});

/* se crea una clase que es un elemento fundamental en la programacion orientada 
a objetos donde para definirlas se usa la palabra reservada class y el uso del 
theUpperCamelCase*/
class Producto {

    /*Se encapsula las propiedades de la clase Producto que permite dar una 
    prodeccion de datos adicional como un tipo de caja negra en este caso codigoProducto
    */
    #codigoProducto;

    // Encapsulamiento de la propiedad nombre producto
    #nombreProducto;

    // Encapsulamiento de la propiedad inventario producto
    #inventarioProducto;

    // Encapsulamiento de la propiedad precioProducto
    #precioProducto;

    // El constructor se usa para inicializar las propiedades de las clases
    constructor() {

        /* Las propiedades de la clase producto se utiliza para dar un valor que se
        inicializa con valores vacios, en este caso codigoProducto se van a manejar en 
        un string*/
        this.#codigoProducto = '';

        //El valor de la propiedad nombreProducto que se maneja en string 
        this.#nombreProducto = '';

        //El valor de la propiedad inventarioProducto que se maneja en number
        this.#inventarioProducto = 0;

        //El valor de la propiedad precioProducto que se maneja en number
        this.#precioProducto = 0;
    }

    // El metodo set se encarga de asignarle o modificar los valores de las propiedades  
    set setCodigoProducto(value) {

        //La propiedad que se le puede modificar el valor es codigoproducto
        this.#codigoProducto = value;
    }

    // El metodo getter se usa para obtener el valor de una propiedad
    get getCodigoProducto() {

        // Se obtiene el valor de la propiedad codigoProducto
        return this.#codigoProducto;
    }
    // Se hace un set de nombre setNombreProducto
    set setNombreProducto(value) {

        // La propiedad que se modifica o asigna el valor es nombre producto
        this.#nombreProducto = value;
    }

    //El metodo get se nombra como getNombreProducto
    get getNombreProducto() {

        //La propiedad que solicita el valor es nombreProducto
        return this.#nombreProducto;
    }

    // Se crea un metodo set llamadoset InventarioProducto
    set setInventarioProducto(value) {

        // La propiedad a asignarle el valor es inventarioProducto
        this.#inventarioProducto = value;
    }

    // Se crea un metodo get llamado getInventarioProducto
    get getInventarioProducto() {

        // La propiedad que es solicitada es inventarioProducto
        return this.#inventarioProducto;
    }

    // se crea un metodo set llamado setPrecioProducto
    set setPrecioProducto(value) {

        // La propiedad que se le asigna un valor es precioProducto
        this.#precioProducto = value;
    }

    // Se crea un metodo get llamado getPrecioProducto
    get getPrecioProducto() {

        // Se solicita la propiedad precioProducto
        return this.#precioProducto
    }
}

//Se crea una clase llamada ProductosTienda
class ProductosTienda {

    // Se crea una propiedad llamada listaProductos que esta encapsulada
    #listaProductos;

    //Se hace un nuevo constructor de la clase Productos tienda
    constructor() {

        //La propiedad que se inicializa es listaProductos que se maneja como un array
        this.#listaProductos = [];
    }

    //Se crea un metodo get llamado getListaProductos
    get getListaProductos() {

        //Se requiere a la propiedad listaproductos
        return this.#listaProductos;
    }

    /* Se crea un metodo cargarArchivoProductos que son funciones para manipular las
    variables de las clases*/
    cargaArchivoProductos() {

        //Se declara una variable llamada contador que permite llevar una cuenta
        let contador = 0;

        /*Se crea una constante llamada datos archivos que va a obtener los objetos de 
        clases que estan en los datos.json */
        try {
            const datosArchivo = require('../datos.json');
            /*Se crea un if que es una estructura condicional que si se cumple la condicion
        de si datosArchivos es mayor que 0 se ejecuta la sentencia*/
            if (datosArchivo.length > 0) {

                //El forEach itera con los elementos de datosArchivo uno por uno con una funcion flecha  
                datosArchivo.forEach(objeto => {

                    //El contador se aumenta uno en uno
                    contador++;

                    // Se crea una variable llamada producto que es una instancia de la clase Producto
                    let producto = new Producto;

                    // Se le asigna un valor desde el archivo del producto con la propiedad 
                    // setCodigoProducto del objeto de la propiedad codigoProducto
                    producto.setCodigoProducto = objeto.codigoProducto;

                    //Se le asigna un valor al archivo del producto de la propiedad setNombreProducto
                    producto.setNombreProducto = objeto.nombreProducto;

                    //Se le asigna un valor al archivo del producto de la propiedad setInventarioProducto
                    producto.setInventarioProducto = objeto.inventarioProducto;

                    //Se le asigna un valor al archivo del producto de la propiedad setprecioProducto 
                    producto.setPrecioProducto = objeto.precioProducto;

                    // El metodo .push añade los elementos al arreglo de la listaProductos  
                    this.#listaProductos.push(producto);
                });

                // Se imprime en la consola un mensaje que nos muestra el total de los productos cargados
                console.log(`Total de productos cargados ==> `.bgBlue +
                    ` ${contador} `.bgRed);

                //Si no se cumple la condicion se mandara en falso 
            } else {

                // Si lo anterior se fue por falso se imprime un mensaje de error en la consola
                console.log(`Error, el archivo datos.json no contiene datos\n`.bgRed);
            }
        } catch (error) {
            console.log(`Error: seleccione la opcion 3 para recuperar los datos.json`)
            return;
        }

    }

    //Se crea un metodo grabaArchivoProductos de la clase
    grabaArchivoProductos() {

        /*La constante llamada instanciaClaseAObjetos contiene la propiedad  
        getListaProductos haciendole un mapeado que es convertir objetos de clase a 
        objetos de JavaScript  y en su parametro creando una funcion flecha*/
        const instanciaClaseAObjetos = this.getListaProductos.map(producto => {

            // Se crea un return para que retorne las propiedades que se necesitan
            return {

                //Se utiliza la propiedad codigoProducto que retorna los valores de la propiedad
                codigoProducto: producto.getCodigoProducto,

                //Se retorna el valor de la propiedad getNombreProducto
                nombreProducto: producto.getNombreProducto,

                //Se retorna el valor de la propiedad getInventarioProducto 
                inventarioProducto: producto.getInventarioProducto,

                //Se retorna el valor de la propiedad getPrecioProducto    
                precioProducto: producto.getPrecioProducto
            };
        });

        /*La constante cadenaJson convierte los objetos de JavaScript a una cadena Json
        Se solicita a la variable instanciaClaseAObjetos, el uso del null no modifica 
        ningun valor del objeto y el 2 es el espacio de la sangria*/
        const cadenaJson = JSON.stringify(instanciaClaseAObjetos, null, 2);

        //La constante nombreArchivo contiene el nombre del archivo json
        const nombreArchivo = 'datos.json';

        /*EL modulo fs interactua con los archivos con una funcion sicronica como lo es 
        writeFileSync que espera a escribir los datos del archivo para continuar con la
        el codigo. dentro de este argumenta esta el nombre del archivo, la constante de 
        la cadenaJson y el estandar de los caracteres especiales*/
        fs.writeFileSync(nombreArchivo, cadenaJson, 'UTF-8');

        // Se imprime un mensaje en la consola que indica donde se guardaron los datos
        // console.log(`DATOS GUARDADOS EN ${nombreArchivo}`.bgMagenta);
    }

    // Se crea un metodo de la clase ProductosTienda
    mostrarProductos() {

        // Se solicita a listaProductos donde el forEach itera sobre los archivos encontrados
        this.getListaProductos.forEach(producto => {

            // Se imprime en consola el valor de las propiedades y se les da una interfaz 
            console.log(`|    ` + producto.getCodigoProducto + `      |` +
                `|      ` + producto.getNombreProducto + `       |` +
                `|       ` + producto.getInventarioProducto + `     |` +
                `|       ` + producto.getPrecioProducto + `    |`);
        })
    }

    // se crea un metodo async que se llama eliminarProducto y permite hacer funciones asincronas como las promesas
    async eliminarProducto() {
    // se crea una variable llamada respuesta
        let respuesta;
    
        // se crea un bucle do while 
        do {
// respuesta contendra una nueva promesa y esta tendra un callbacñ
            respuesta = await new Promise(resolve => {

// se crea una interfaz de usuario que le hace una pregunta y su respuesta se guardara en res 
                readLine.question(`¿Desea eliminar otro producto (si/no): `, (res) => {

// resolve contendra la respuesta del usuario en string eliminando los espacios en blanco y en mayuscula
                    resolve(res.trim().toUpperCase());
                });
            });

// se crea un if else que si la respuesta es estrictamente si continua 
            if (respuesta === 'SI') {

// se limpiara la consola, mostraran los producyos y pasara a eliminarProducto
                console.clear();
                this.mostrarProductos();
                await this.eliminarUnProducto();

// si la respuesta es diferente a NO, se imprimira un mensaje en consola 
            } else if (respuesta !== 'NO') {
                console.log(`Por favor seleccione si o no`);
            }

// este while repetira el ciclo mientras la respuesta sea diferente a NO
        } while (respuesta !== 'NO');
    }
    

// se crea un nuevo metodo asyncrono llamado eliminarProducto
    async eliminarUnProducto() {

// dentro de este metodo se encontrara una constante que contendra una nueva promesa y tendra un callback 
        const codigoProductoAEliminar = await new Promise(resolve => {

// se le hace una pregunta al usuario cuya respuesta sera guardada en codigo 
            readLine.question(`Ingrese el código del producto que desea eliminar: `, (codigo) => {
            
// el resolve contendra lo que obtenga de respuesta codigo 
                resolve(codigo);
            });
        });
    
/* la constante llamada productoIndex contendra que lo que esta en .#listaProductos que permitira
encontrar si la condicion dada que es si el getCodigoProducto es estrictamente igual a codigoProductoAEliminar
sera mandada una respuesta en true y si la condicion dada es diferente sera -1 */
        const productoIndex = this.#listaProductos.findIndex(producto => producto.getCodigoProducto === codigoProductoAEliminar);

// si productoIndex es desigual a -1 continuara 
        if (productoIndex !== -1) {

// lo que contenga el arreglo #listaProductos eliminara los elementos existentes y eliminando un unico elemento
            this.#listaProductos.splice(productoIndex, 1);

// se grabara los cambios y se imprimira un mensaje en la consola 
            this.grabaArchivoProductos();
            console.log(`Producto con código ${codigoProductoAEliminar} eliminado exitosamente.`);

// si la condicion dada esta por falso, se imprimira un mensaje en la consola
        } else {
            console.log(`No se encontró ningún producto con el código ${codigoProductoAEliminar}.`);
        }
    }
                
    //se crea una nueva funcion flecha que sera async y un parametro de productosTienda

    async agregarProducto   (productosTienda) {
    // se retornara una nueva promes y esta obtendra un callback
        return new Promise((resolve) => {
    
    // la funcion flecha sera llamada obtenerCodigoUnico
            const obtenerCodigoUnico = () => {
    
    // se retornara una nueva promesa  que contendra un callback en su parametro codigoResolve
                return new Promise((codigoResolve) => {
    
    // se tendra una nueva funcion flecha que llevara como nombre verificarYObtenerCodigo 
                    const verificarYObtenerCodigo = () => {
    
    // se le pregunta al usuario y la respuesta se guardara en respuesta
                        readLine.question('Ingrese el código del producto: ', (respuesta) => {
    
    // la constante codigoProducto contendra lo que se guarde en respuesta 
                            const codigoProducto = respuesta;
    
    /* la constante codigoExistente contendra que lo que esta en getListaProductos obtendra un valor buleano
    que su condicion sera que si getCodigoProducto es estrictamente igual a codigoProducto, en este caso 
    se devolvera un true si esa condicion es verdadera  */
                            const codigoExistente = productosTienda.getListaProductos.some(producto => producto.getCodigoProducto === codigoProducto);
    
    // la condicion es el codigoExistente si esta se cumple sigue e imprimira un mensaje en consola
                            if (codigoExistente) {
                                console.log("El código del producto ya existe. Por favor, ingrese un código único.");
                                verificarYObtenerCodigo();  // Volver a verificar si el código existe
                            } else {
                                codigoResolve(codigoProducto);  // Resolver la promesa con el código válido
                            }
                        });
                    };
    
                    verificarYObtenerCodigo();  // Iniciar el proceso de verificación del código
                });
            };
    
    // se crea una nueva funcion flecha llamada preguntaNumerica que sera async y tendra como parametro mensaje
            const preguntaNumerica = async (mensaje) => {
    
    // se crea una variable llamada valor 
                let valor;
    
    // se utiliza un nuevo ciclo do while 
                do {
    
    // valor obtendra una pausa esperando la respuesta del usuario
                    valor = await pregunta(mensaje);
    
    // si el valor es NaN o es estrictamente igual a 0, se imprimira un mensajeen consola 
                    if (isNaN(valor) || valor === 0) {
                        console.log("Por favor, ingrese un valor numérico no igual a 0.");
                    }
    
    // si el valor es NaN o estrictamente igual 0 se repetira hasta que esta condicion no se de
                } while (isNaN(valor) || valor === 0);
    
    // retorna el valor 
                return valor;
            };
    
    // se crea una nueva funcion flecha llamada pregunta que tendra como parametro mensaje 
            const pregunta = (mensaje) => {
    
    // esta obtendra una nueva Promesa que contendra un callback 
                return new Promise((resolve) => {
    
    // se preguntara al usuario y su respuesta sera guardada en respuesta 
                    readLine.question(mensaje, (respuesta) => {
    
    // se resuelve esta promesa devolviendo convirtiendo la respuesta del usuario en un numero 
                        resolve(Number(respuesta));
                    });
                });
            };
    
                
    // se crea una nueva funcion flecha llamada agregarProductoRecursivo y esta sera asincrona
            const agregarProductoRecursivo = async () => {
    
    // se creara una constante llamada codigoProducto que esperara a obtenerCodigoUnico
                const codigoProducto = await obtenerCodigoUnico();
            
    // se le hara una pregunta al usuario y su respuesta sera async y se guardara en nombreProducto 
                readLine.question('Ingrese el nombre del producto: ', async (nombreProducto) => {
    
    // la constante llamada inventarioProducto y precioProducto contendra una espera a preguntaNumerica con un mensaje en consola 
                    const inventarioProducto = await preguntaNumerica('Ingrese el inventario del producto: ');
                    const precioProducto = await preguntaNumerica('Ingrese el precio del producto: ');
            
    // la constante producto contendra una instancia de la clase Producto
                    const producto = new Producto();
    
    // producto.setCodigoProducto contendra lo que esta en codigoProducto
                    producto.setCodigoProducto = codigoProducto;
    
    // producto.setNombreProducto obtendra lo que esta en nombreProducto 
                    producto.setNombreProducto = nombreProducto;
    
    // producto.setInventarioProducto obtendra lo que esta en inventarioProducto
                    producto.setInventarioProducto = inventarioProducto;
    
    // producto.setPrecioProducto obtendra lo que esta en precioProducto
                    producto.setPrecioProducto = precioProducto;
            
                    productosTienda.getListaProductos.push(producto);
            
                    const realizarOtraPregunta = async () => {
                        readLine.question('¿Desea agregar otro producto? (si/no): ', async (respuesta) => {
                            respuesta = respuesta.toLowerCase();
                            if (respuesta === 'si') {
                                console.clear();
                                productosTienda.grabaArchivoProductos();
                                productosTienda.mostrarProductos();
                                await agregarProductoRecursivo();
                            } else if (respuesta !== 'no') {
                                console.log('Respuesta no válida. Intente de nuevo.');
                                await realizarOtraPregunta();
                            } else {
                                resolve()
                            }
                        });
                    };
            
                    await realizarOtraPregunta();
                });
            };
            
            agregarProductoRecursivo();
        })
    }   
    
    // se crea un metodo de la clase llamado hacerCopiaDeSeguridad
    hacerCopiaDeSeguridad() {

        /* se crea una constante llamada fechaHora que contiene una nueva fecha que elimina algunos
        caracteres y elimina los ultimos 5 caracteres que eliminan los milisegundos */
        const fechaHora = new Date().toISOString().replace(/[-T:]/g, '').slice(0, -5);

        // se crea una nueva constante llamada nombreArchivo que contiene el nombre con lo que contiene fechaHora
        const nombreArchivo = `backup_${fechaHora}.json`;

        // esta proporciona una copia del archivo en un origen esperando a que esta se haga con exito imprimiendo un mensaje
        fs.copyFileSync('datos.json', nombreArchivo);
        console.log(`Copia de seguridad realizada con éxito. Archivo guardado como ` + `${nombreArchivo}.`.bgCyan);
    }

}



// se crea una clase llamada Cliente, esta es la forma en la que javascript utiliza clases y son prototipos
class Cliente {

    // se les da propiedades a la clase, estos propiedades son encapsulados
    #nombreCompleto;
    #documento;
    #direccion;
    #productosComprados


    // se cra un metodo constructor de la clase que inicializa las propiedades de esta
    constructor() {

        // las propiedades se manejan string vacios, valores numericos y un array
        this.#nombreCompleto = ""
        this.#documento = 0
        this.#direccion = ""
        this.#productosComprados = [];
    }

    // se crea un metodo set que le da un valor a la propiedad nombreCompleto
    set setNombreCompleto(value) {
        this.#nombreCompleto = value
    }

    // el metodo get retorna los valores que estan en nombreCompleto
    get getNombreCompleto() {
        return this.#nombreCompleto
    }

    // se crea un metodo set que le da un valor a la propiedad documento
    set setDocumento(value) {
        this.#documento = value;
    }

    // el metodo get retorna los valores que estan en documento
    get getDocumento() {
        return this.#documento;
    }

    // se crea un metodo set que le da un valor a la propiedad documento
    set setDireccion(value) {
        this.#direccion = value
    }

    // el metodo get retorna los valores que estan en direccion
    get getDireccion() {
        return this.#direccion
    }

    // el metodo get retorna los valores que estan en nombreCompleto
    get getProductosComprados() {
        return this.#productosComprados
    }

    async solicitarNombre() {
        let nombre = '';
    do{ 
            const rel = readLine;
            nombre = await new Promise(resolve => {
                rel.question('Ingrese su nombre completo: ', (respuesta) => {
                    resolve(respuesta);
                });
            });
    
            if (nombre.trim() === '') {
                console.log('Por favor, ingrese un nombre válido.');
            }
        
    
        this.setNombreCompleto = nombre;
         }while (nombre.trim() === '')
    
}
    



    async solicitarDocumento() {
        let document = 0;
        do {
            const rel = readLine
        const documento = await new Promise(resolve => {
            rel.question('Ingrese su número de documento: ', (respuesta) => {
                resolve(respuesta);
            });
        });
       
            document = parseInt(documento)
            if(isNaN(document)){
                console.log(`no es un numero, digite su numero de documento`)
            }
            
        this.setDocumento = document;
        } while (isNaN(document));
        
        
    }

    async solicitarDireccion() {
        let direccion = '';
        do {
            const rel = readLine
         direccion = await new Promise(resolve => {
            rel.question('Ingrese su dirección: ', (respuesta) => {
                resolve(respuesta);
            });
        });
        if (direccion.trim() === '') {
            console.log(`Ingrese una direccion valida`)
        }
        this.setDireccion = direccion;
        } while (direccion.trim() === '');
        

    }

    // se crea un nuevo metodo llamado realizarCompra que tiene como argumento productosTienda
    async realizarCompra(productosTienda) {

        // se crea una constante llamada rel que contiene la interfaz
        const rel = readLine;

        // la variable continuarComprando contiene un valor buleano
        let continuarComprando = true;

        // se crea un ciclo do while
        do {

            // se crean 3 variables nuevas que contendran los valores de codigo cantidad y producto
            let codigoProducto = 0;
            let cantidad = 0;
            let producto = '';

            // se crea un nuevo ciclo do while
            do {

                // el codigoProducto contendra una nueva promesa que obtendra un callback
                codigoProducto = await new Promise(resolve => {

                    // se le pregunta al usuario el codigo del producto y la respuesta se guardara en codigo 
                    rel.question('Ingrese el código del producto que desea comprar (o "0" para cancelar): ', (codigo) => {
                        resolve(codigo);
                    });
                });

                // se crea un if else donde si el codigoProducto es estrictamente igual a 0 se salga de la compra 
                if (codigoProducto === "0") {

                    // se imprime un mensaje en la consola 
                    console.log("Compra cancelada.");
                    return;
                }

                /* producto contendra un callbak donde va a buscar en una lista hasta que la condicion se cumpla, en este 
                caso si getCodigoProducto sea estrictamente igual a lo que obtenga codigo producto parar la busqueda y guardarse en producto */
                producto = productosTienda.getListaProductos.find(producto => producto.getCodigoProducto === codigoProducto);

                /* si no hay el producto que se imprima un mensaje y se repita el ciclo hasta que selecione
                una opcion correcta o el producto exista */
                if (!producto) {
                    console.log(`No se encontró ningún producto con el código ${codigoProducto}.`);
                }
            } while (!producto);

            // se crea un nuevo ciclo do while
            do {

                // se guardara en cantidad una nueva promesa que esperara a que se resuelva un callback
                cantidad = await new Promise(resolve => {

                    // se pregunta al usuario sobre la cantidad que se desea comprar y la respuesta queda guarda en cantidadImput
                    rel.question(`Ingrese la cantidad de ${producto.getNombreProducto} que desea comprar: `, (cantidadInput) => {
                        resolve(cantidadInput);
                    });
                });

                // si la cantidad es un valor null o la cantidad sea igual o menor a 0 se imprima un mensaje en consola 
                if (isNaN(cantidad) || parseInt(cantidad) <= 0) {
                    console.log("Ingrese una cantidad válida.");

                    // si el valor de la cantidad es mayora lo que esta en inventario se imprima un mensaje 
                } else if (parseInt(cantidad) > producto.getInventarioProducto) {
                    console.log(`No hay suficientes unidades en inventario. Intente con una cantidad menor.`);
                }

                /* el ciclo se repetira si la cantidad es null o si la cantidad es igual o menor a 0 o si la cantidad
                es mayor a lo que hay en inventario se repetira hasta que ingrese una cantidad valida */
            } while (isNaN(cantidad) || parseInt(cantidad) <= 0 || parseInt(cantidad) > producto.getInventarioProducto);
                
            // se restará la cantidad del inventario
    producto.setInventarioProducto = producto.getInventarioProducto - cantidad;

    // si el inventario del producto es igual a cero, elimina el producto del array
    if (producto.getInventarioProducto === 0) {
        const productoIndex = productosTienda.getListaProductos.findIndex(producto => producto.getCodigoProducto === codigoProducto);

        // si productoIndex es diferente de -1, eliminará el producto del array
        if (productoIndex !== -1) {
            productosTienda.getListaProductos.splice(productoIndex, 1);
        }
    }
            

            // se añadira los elementos a this.#productosComprados
            this.#productosComprados.push({

                // codigoProducto obtendra lo que esta en getCodigoProducto
                codigoProducto: producto.getCodigoProducto,

                // nombreProducto obtendra lo que esta en getNombreProducto
                nombreProducto: producto.getNombreProducto,

                // cantidadComprada obtendea lo que esta en cantidad
                cantidadComprada: parseInt(cantidad),

                // precio unitario obtendra lo que esta en getPrecioProducto
                precioUnitario: producto.getPrecioProducto
            });

            // se imprime un mensaje en consola
            console.log(`Compra realizada exitosamente.`);

            // se crea una variable respuesta que obtendra lo que se guarde en respuesta
            let respuesta;

            // se crea un ciclo do while
            do {

                // en respuesta se guardara una nueva promesa que es un callbak y esperara una respuesta
                respuesta = await new Promise(resolve => {

                    // pregunta al usuario si desea comprar un producto y la respuesta se guardara en res
                    rel.question('¿Desea comprar otro producto? (s/n): ', (res) => {

                        // se guarda lo que el cliente que se guardara en minuscula
                        resolve(res.toLowerCase());
                    });
                });

                // si la respuesta es distinta a s y n se queda esperando a que se seleccione una respuesta correcta
            } while (respuesta !== 's' && respuesta !== 'n');

            // se guardara en continuarComprando la respuesta que si es estrictamente una s se repetira el ciclo 
            continuarComprando = respuesta === 's';
                     console.clear()
                    productosTienda.mostrarProductos()

        } while (continuarComprando);
        productosTienda.grabaArchivoProductos();
        console.log("Gracias por comprar. ¡Que tenga un buen día!");
    }


    imprimirFactura() {
        // Imprimir detalles del cliente
        console.log(`Nombre: ${this.getNombreCompleto}`);
        console.log(`Documento: ${this.getDocumento}`);
        console.log(`Dirección: ${this.getDireccion}`);

        // Imprimir detalles de los productos comprados
        console.log("\nProductos Comprados:");
        console.log("| Código | Nombre | Cantidad | Precio Unitario | Subtotal |");

        let total = 0;

        this.getProductosComprados.forEach(producto => {
            const subtotal = producto.cantidadComprada * producto.precioUnitario;
            total += subtotal;

            console.log(`|   ${producto.codigoProducto}   |   ${producto.nombreProducto}   |   ${producto.cantidadComprada}   |   ${producto.precioUnitario}   |   ${subtotal}   |`);
        });

        // Imprimir el total
        console.log(`\nTotal: ${total}`);
    }
}




module.exports = {
    Producto,
    ProductosTienda,
    Cliente,
    readLine
}
