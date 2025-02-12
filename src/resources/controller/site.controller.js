class SiteController {
    index(req, res, next) {
        res.render('site/home');
    }
    account(req, res, next){
        res.render('site/profile')
    }
    notification(req, res, next) {
        res.render('site/notification');
    }
    order(req, res, next) {
        res.render('site/orders');
    }
}

module.exports = new SiteController();