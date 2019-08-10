module.exports = {
    index : (req, res, next) => {
        res.render('index',{
            isAuthenticated : req.isAuthenticated(),
            user: req.user
        });
    },
    frases : (req, res, next) => {
        res.render('frases',{
            isAuthenticated : req.isAuthenticated(),
            user: req.user
        });
    }

}