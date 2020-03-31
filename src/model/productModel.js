/** @format */

const Product = require("../schema/product");

module.exports = {
  saveData: async data => {
    let productData = new Product(data);
    return await productData.save();
  },
  getAll: async data => {
    if (data) {
      return await Product.find({ categories: data }).lean();
    } else {
      return await Product.find().lean();
    }
  },
  updateOneProduct:async (params,data)=>{
     return await Product.findByIdAndUpdate(params,data,{new:true})
  }
};
