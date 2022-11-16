const { readProducts, createProduct, readProduct, productExists, deleteProduct, updateProduct } = require("../services/product")

const getAll = (req, res) => {

    const products = readProducts();
    if (products <= 0) {
        return res.status(404).json({
            status: 'hubo un error',
            message: 'no se encontraron productos'
        })
    }
    return res.status(200).json(products)
}

const getOne = (req, res) => {
    const { id } = req.params;

    const product = readProduct(id)

    if (product.length == 0) {
        return res.status(404).json({
            status: 'hubo un error',
            message: 'el producto no ha sido encontrado'
        })
    }
    return res.status(200).json(product)
}

const create = (req, res) => {
    const { name, price, description } = req.body;
    const product = {
        name, price, description
    }
    createProduct(product)

    return res.status(201).json({
        status: 'exito',
        message: 'producto creado',
        product
    })
}

const update = (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body

    const product = {
        name, price, description
    }
    if (!productExists(id)) {
        return res.status(404).json({
            status: 'hubo un error',
            message: 'el producto no ha sido encontrado'
        })
    }

    updateProduct(id, product)
    return res.status(200).json({
        status: 'exito',
        message: 'el producto ha sido actualizado'
    })
}

const deleteOne = (req, res) => {
    const { id } = req.params;
    if (!productExists(id)) {
        return res.status(404).json({
            status: 'hubo un error',
            message: 'el producto no ha sido encontrado'
        })
    }

    deleteProduct(id)
    return res.status(200).json({
        status: 'exito',
        message: 'el producto ha sido eliminado'
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}