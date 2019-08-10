// Se cargan todos los controladores automaticamente
const fs = require('fs'),
path = require('path');

var files = fs.readdirSync(__dirname);

files.forEach( file =>{
    let fileName = path.basename(file,'.js');
    /*if(fileName !== 'index' ){
        exports[fileName] = require('./'+fileName);
    }*/
    (fileName !== 'index') ? exports[fileName] = require('./'+fileName) : file ;
});