const ASAgarwal =  require("./ASAgarwal");
const ApexHours = require("./ApexHours");
const salesforcecodex = require ("./SalesforceCodex");
const SalesforceDeveloperBlog = require ("./SalesforceDeveloperBlog");
const SalesforceEngineering =  require ("./SalesforceEngineering");
const AutomationChampion = require ("./AutomationChampions");
const SFBenDev = require("./SFBenDev");
const express = require("express");
const articles = require('./allArticles.json')

const app = express();
const port = process.env.PORT || 3000;

app.get("/",async (req,res) =>{
  try {
    const data = articles;
    //console.log('first',data);
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message:' Error fetching the Blogs'})
  }
  
});


app.listen(port, "0.0.0.0", () => console.log(`Server Started at PORT: `,{port}));

