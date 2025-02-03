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
exports.addNewProduct = async (req, res)=>{
    try{
        const newProduct = req.body;
        const check = await Product.findOne({proId:newProduct.proId})
        if(!check){            
            await Product.create(req.body);
            res.json(newProduct)
        }
        else
            return res.status(500).json({msg:'Record already exixts'})     
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }

}

exports.updateExistProduct = async (req, res)=>{
    try{
        const product = req.body;
        const check = await Product.findOne({proId:product.proId})
        if(check){
            await Product.updateOne(product)
            res.json(product)
        }
        else
            res.status(404).json({msg: 'Data doesnt exist'})
    }
    catch(err){
        console.log(err);
    }
}

exports.deleteProduct = async (req, res) =>{
    try{
        const check = await Product.findOne({proId:req.params.id})
        if(check){
            await Product.deleteOne({proId: check.proId})
            res.json(check)
        }
        else
            res.status(404).json({msg: 'Data doesnt exist'})
    }
    catch(err){
        console.log(err);
    }
}



