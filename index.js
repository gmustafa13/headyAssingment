 /**
  * require express framework and using it
  */
 const express = require('express');
 const app = express();

 
/**
 * connect dataBase
 */
 
const mongoDb = require("./mongodb");

/**
 * require route
 */
 const categoryRouters = require('./src/controller/categoryController');
 const productRouters = require('./src/controller/productController');


/**
 * using route and body parser
 */
  app.use(express.json())
  app.use(categoryRouters)
  app.use(productRouters)


  /**
   * to start listing on port 
   */
  const port = process.dev || 3000;

  app.listen(port,(err,portConnected)=>{

    if(err){
        console.log("error while connecting port");
    }else{
        console.log("successful connected " + port);
    }
  })
