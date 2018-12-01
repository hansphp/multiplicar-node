// required
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    let data = '';

    console.log('================'.green);
    console.log(`== Tabla de ${base} ==`.green);
    console.log('================'.green);

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }

    return data;
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        let data = listarTabla(base, limite);

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, 'utf8', (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}