const movies = require('../models/movies')
const directors = require('../models/directors')

class DirectorController {
    getList(req, res, next) {
        var id = req.params.id
        var itemsPerPage = 6
        req.session.idCategories = id
        product.find({ 'description.typeCode': id }, (err, result) => {
            supplier.find({}, (err, supllierResult) => {
                type.findOne({ _id: id }, (err, typeResult) => {
                    res.render('categories-list-item', {
                        suppliers: supllierResult,
                        products: result,
                        type: typeResult,
                        itemsPerPage: itemsPerPage,
                        currentPage: 1
                    })
                })
            })
        })
    }

    getListAtPage(req, res, next) {
        var id = req.session.idCategories
        var itemsPerPage = 6
        var currentPage = req.params.page
        product.find({ 'description.typeCode': id }, (err, result) => {
            supplier.find({}, (err, supllierResult) => {
                type.findOne({ _id: id }, (err, typeResult) => {
                    res.render('categories-list-item', {
                        suppliers: supllierResult,
                        products: result,
                        type: typeResult,
                        itemsPerPage: itemsPerPage,
                        currentPage: currentPage
                    })
                })
            })
        })
    }
}

module.exports = new CategoriesController()
