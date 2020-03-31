const express = require("express");
const router = new express.Router();

const categoryModel = require('../model/categoryModel');

router.post('/category/save',async(req,res)=>{
    try {
        let categoryData = await categoryModel.saveData(req.body);
    if (Object.keys(categoryData).length === 0) {
      res.status(200).json({});
    } else {
      res.status(200).json(categoryData);
    }
    } catch (error) {
        res.status(404).json(error)
    }
})
router.get('/category/getall',async (req,res)=>{
    try {
        let categoryData = await categoryModel.getAll();
    if (categoryData.length === 0) {
      res.status(200).json([]);
    } else {
      res.status(200).json(categoryData);
    }
    } catch (error) {
        res.status(404).json(error)
    }
})
module.exports = router