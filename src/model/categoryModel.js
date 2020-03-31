/** @format */

const Category = require("../schema/category");

module.exports = {
  saveData: async data => {
    if (!data.parentCategory) {
      data.parentCategory = null;
    }
    let categoryData = new Category(data);
    return await categoryData.save();
  },
  getAll: async () => {
   return await  Category.aggregate([
      { $addFields: { parentCategory: { $toString: "$_id" } } },
      {
        $lookup: {
          from: "categories",
          localField: "parentCategory",
          foreignField: "parentCategory",
          as: "child_categories"
        }
      }
    ])
}
};
