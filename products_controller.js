module.exports = {
    createProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name, description, price, image_url} = req.body
        dbInstance.create_product([name, description, price, image_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
            console.log(err)
        })
    },
    getProduct: (req,res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.read_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
            console.log(err)
        })
    },
    getAllProducts: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
            console.log(err)
        })
    },
    updateProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {params, query} = req;
        dbInstance.update_product([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
            console.log(err)
        })
    },
    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
            console.log(err)
        })
    }
}