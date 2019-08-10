const localStrategy = require('passport-local').Strategy,
    mysql = require('mysql'),
    bcrypt = require('bcryptjs');
module.exports = (passport) => {

    passport.serializeUser((user, done)=>{
        done(null, user);
    });

    passport.deserializeUser((obj, done)=>{
        done(null,obj);
    });

    passport.use(new localStrategy({
        passReqToCallback : true
    }, (req, correo, password, done)=>{
        // requerimos mysql y bcrypt
        let config = require('.././database/config'),
            db = mysql.createConnection(config);
            db.connect();
        db.query('SELECT * FROM users WHERE correo = ?', correo, (err, rows, fields)=>{
            if(err) throw err;
            db.end();
            if(rows.length > 0){
                var user = rows[0];
                console.log(user);
                if(bcrypt.compareSync(password, user.contrasena)){
                    return done(null, {
                        id: user.id,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        correo: user.correo,
                        contrasena: user.contrasena
                    });
                }
            }
            console.log(user);
            return done(null, false, req.flash('authMessage','Email o Contraseña incorrecta'));
        });
    }));

}