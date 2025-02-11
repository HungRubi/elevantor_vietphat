class CartController{
    index(req, res, next){
        res.render('cart/cart')
    }
}

module.exports = new CartController();