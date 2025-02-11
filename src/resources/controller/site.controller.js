class SiteController {
    index(req, res, next) {
        res.render('site/home');
    }
    account(req, res, next){
        res.render('site/profile')
    }
}

module.exports = new SiteController();