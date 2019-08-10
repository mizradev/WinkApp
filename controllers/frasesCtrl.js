module.exports = {
    index: (req, res, next) => {
        res.render('frases', {isAuthenticated : 0 || req.isAuthenticated()});
    },
    getAgregarFrases: (req, res, next) => {
        res.render('frases/agregarFrase', {isAuthenticated : 0 || req.isAuthenticated()});
    }
}