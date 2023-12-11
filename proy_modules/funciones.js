const { Producto,readLine } = require(`./caritoCompras`);


const rl = readLine

const pausa =()=>{
    return new Promise(resolve =>{

        rl.question(`\n presione ${`enter`.yellow} para continuar\n`, ()=>{

            resolve();
        });
    });
}
  

// se solicita a file system que permite manipular los archivos .json 
const fs = require('fs');

// este modulo permite manipular la ruta de los archivos
const path = require('path');

// se crea una funcion asincrona llamada recuperacion que a su vez una funcion flecha 
 const  recuperacion = async() =>{

// la constante archivoPrincipal contendra el nombre del archivo principal
    const archivoPrincipal = 'datos.json';

// la constante rutaCopiasDeSeguridad contiene la direccion donde se encuentran los archivos
    const rutaCopiasDeSeguridad = path.join(__dirname, '..');
    
/* la constante copiasDeSeguridad contiene un metodo que lee lo que esta en el directorio que esta en
rutaCopiasDeSeguridad y filtra los archivos por el nombre en el que empieza, en este caso backup_ */
    const copiasDeSeguridad = fs.readdirSync(rutaCopiasDeSeguridad).filter(file => file.startsWith('backup_'));

// si lo que contiene copiasDeSeguridad no contienen nada se imprimira un mensaje y volvera a pausa 
    if (copiasDeSeguridad.length === 0) {
        console.log('No hay copias de seguridad disponibles.');
        return;
    }

let seleccion

    

    console.log('Copia de seguridad disponibles:');
    

// si se encuentra las copias de seguridad itera uno en uno las copiasDeSeguridad existentes y les pone un numero en orden 
    copiasDeSeguridad.forEach((copia, index) => {
        console.log(`${index + 1}. ${copia}`);
    });

// se crea una constante llamada rl que contendra la interfaz del usuario
    const rl = readLine;
    do {
// en la constante seleccion contendra una nueva promesa que tiene un callback y espera a que devuelva una respuesta
     seleccion = await new Promise(resolve => {
        
/* se le pregunta al usuario que seleccione el numero de copia que quiere restaurar, la respuesta se guardara en 
answer y la respuesta quedara en numero entero */
        rl.question('Seleccione el número de la copia de seguridad que desea restaurar o ingrese "0" para cancelar: ', (answer) => {
            resolve(parseInt(answer));
        });
    });

    

// si lo que esta en la selecciones mayor o igual a 1 y si copias de seguridad es igual o menor que seleccion sigue 
    if (seleccion >= 1 && seleccion <= copiasDeSeguridad.length) {

// la constante copiaSeleccionada contiene a copiasDeSegurida y la seleccion sea -1
        const copiaSeleccionada = copiasDeSeguridad[seleccion - 1];

// este modulo fs copea los archivos de forma sincronica, copeara copia seleccionada a archivoPrincipal
        fs.copyFileSync(copiaSeleccionada, archivoPrincipal);

// se imprimira un mensaje en consola 
        console.log(`Se ha restaurado el archivo ${archivoPrincipal} desde la copia de seguridad ${copiaSeleccionada}.`);

// si seleccion es diferente a 0 ejecuta y imprime un mensaje en consola 
    } else if (seleccion !== 0) {
        console.log('Selección inválida.');
    }

// el bucle se repite si seleccion es menor que 0 o mayor a la cantidad de caracteres
} while ( seleccion < 0 || seleccion > copiasDeSeguridad.length);
    };

const menu = () => {

    return new Promise(resolve => {
        console.log(`*******************************************`.red);
        console.log(`*                                         *`.red);
        console.log(`*         `.red + `Bienvenidos a la Tienda`.bgMagenta  + `         *`.red + 
        `\n` + `*`.red+ `     Por favor seleccione una opcion`+`     *`.red);
        console.log(`*                                         *`.red);
        console.log(`*******************************************`.red)
        console.log(`*                                         *`.yellow)
        console.log(`*        `.yellow + `${`1. `.green} Cargar Datos` + `                 *`.yellow);
        console.log(`*        `.yellow +`${`2. `.green} Copia de Respaldo` + `            *`.yellow);
        console.log(`*        `.yellow +`${`3. `.green} Reparacion de Datos` + `          *`.yellow);
        console.log(`*        `.yellow + `${`4. `.green} Grabar Nuevos Productos` + `      *`.yellow);
        console.log(`*        `.yellow +`${`5. `.green} Borrar Producto` + `              *`.yellow);
        console.log(`*        `.yellow +`${`6. `.green} Comprar productos` + `            *`.yellow);
        console.log(`*        `.yellow +`${`7. `.green} Imprimir Factura` + `             *`.yellow);
        console.log(`*        `.yellow +`${`0. `.green} Cerrar APP`+ `                   *`.yellow);   
        console.log(`*                                         *`.yellow)
        console.log(`*******************************************`.yellow)
        rl.question(`Seleccione una opcion: `, async (opt) => {
            if (opt === '0') {
               readLine.close() 
            }
            resolve(opt);
        })
    })
};


// se exportan las funciones pausa, menu y recuperacion 
module.exports = {
    pausa,
    menu,
    recuperacion
}