//leer una api
import fsp from 'node:fs/promises'
import path from 'node:path'
try{
    //hacer una peticion con FECH -> con promesas
    const respuesta = await fetch('https://69cbcb780b417a19e07b42c1.mockapi.io/api/v1/Productos')
    //extraemos del cuerpo la peticion de datos 
    const productos = await respuesta.json() //<- transforma el cuerpo de cadena de texto a un objeto/arreglo de js
    //console.log(productos)
    
    //creamos la ruta 
    //const ruta = path.join('.api.txt')
    const ruta = path.join('.api.json')
    //guardar los datos de un archivo 
    const contenido = JSON.stringify(productos , null  , 4) //<- pasa de js a FORMATO TEXTO    
    await fsp.writeFile(ruta ,contenido )

}catch(e){
    console.log(e)
}