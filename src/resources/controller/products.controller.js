class ProductsController{
    index(req, res, next){
        res.render('products/products');
    }

    detail(req, res, next) {
        res.render('products/detail')
    }

    getCategory(req, res, next) {
        res.render('products/categoryProduct')
    }
}
module.exports = new ProductsController();