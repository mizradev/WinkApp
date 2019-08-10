const mysql = require('mysql'),
    bcrypt = require('bcryptjs'),
    config = require('.././database/config');

module.exports = {
    registro : (req, res, next)=>{
        return res.render('usuarios/registro', { isAuthenticated : 0 || req.isAuthenticated()});
    },

    login : (req, res, next) => {
        return res.render('usuarios/login', { 
            isAuthenticated : req.isAuthenticated()
        });
    },

    getDash : (req, res, next) => {
        return res.render('plataforma/dash', {
            isAuthenticated :  req.isAuthenticated(),
            user: req.user,
            title: 'Dashboard'
        });

    },
    postRegistro :  (req, res, next) => {
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(req.body.contrasena, salt);
        console.log(req.body);
        const user = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            cuenta: req.body.cuenta,
            carrera: req.body.carrera,
            contrasena: password
        };
        console.log('Usuario guardado en la base: ',user);
        const db = mysql.createConnection(config);
        db.connect((err)=>{
            if(err){console.error('Error al conectarse a la base de datos =>'+err.stack);}
            console.log('Conexion Lista a la base de datos! :)');
        });
        db.query('INSERT INTO users SET ?',user,(err, rows,fields)=>{
            if(err) throw err;
            db.end();
        });
        console.log('El usuario se registró correctamente!');
        req.flash('info','Se ha registrado correctamente, ya puede iniciar sesion!');
        return res.redirect('/auth/login');
    },
    logout : (req, res, next) => {
        req.logout();
        res.redirect('/auth/login');
    }

}