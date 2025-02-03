const Product = require('../model/Product');


exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleProduct = async (req, res) =>{
    try {
        const product = await Product.findOne({proId: req.params.id})
        if(!product)
            return res.status(404).json({msg: 'Product Not found'})
        
        res.json(product)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}


