const express = require("express");
const router = new express.Router();

const productModel = require('../model/productModel');

router.post('/product/save',async(req,res)=>{
    try {
        let productData = await productModel.saveData(req.body);
    if (Object.keys(productData).length === 0) {
      res.status(200).json({});
    } else {
      res.status(200).json(productData);
    }
    } catch (error) {
        res.status(404).json(error)
    }
})
router.get('/product/getall',async (req,res)=>{
    try {
        let productData = await productModel.getAll(req.headers.category);
    if (productData.length === 0) {
      res.status(200).json([]);
    } else {
      res.status(200).json(productData);
    }
    } catch (error) {
        res.status(404).json(error)
    }
})
router.put('/product/:productId', async(req,res)=>{
    try {
       let updatedData = await productModel.updateOneProduct(req.params.productId,req.body) 
       res.status(200).json(updatedData)
    } catch (error) {
        res.status(404).json(error)
    }
})
module.exports = router