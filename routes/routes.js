const express = require('express'),
    passport = require('passport'),
      router = express.Router(),
      auth = require('.././middleware/auth'),
      controllers = require('.././controllers');

/* GET home page. */
router.get('/', controllers.inicioCtrl.index);

// ruta de usuarios publico general
router.get('/frases', controllers.inicioCtrl.frases);

// Rutas de usuarios de registrados
router.get('/auth/login', controllers.userCtrl.login);
router.get('/auth/signup', controllers.userCtrl.registro);
router.post('/auth/signup', controllers.userCtrl.postRegistro);
router.post('/auth/login', passport.authenticate('local',{
    successRedirect : '/app/dash',
    failureRedirect : '/auth/login',
    failureFlash : true
}));
router.get('/auth/logout', controllers.userCtrl.logout);
router.get('/app/dash', auth.isLogged ,controllers.userCtrl.getDash);


router.get('**', (req,res,next)=>{res.render('404',{isAuthenticated : 0 || req.isAuthenticated()})});


module.exports = router;
