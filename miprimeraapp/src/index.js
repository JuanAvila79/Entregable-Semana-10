// nos ayuda a inicializar la pagina web

const express = require('express'); // constante en la que usamos la libreria express

const app = express(); // estamos inicializando el frameword

const port = 4000; // le asignamos el puerto donde se inicializa el proyecto.

app.use(express.static('src/public')); // le indicamos la ruta donde se encuentra los documentos de la carpeta publica

app.get( '/' , (req , res) => {res.render("index.js")} )

app.listen(port,()=> console.log('Servidor inicializado en el puerto ',port));