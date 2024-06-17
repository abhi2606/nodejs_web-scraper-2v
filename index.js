const ASAgarwal =  require("./ASAgarwal");
const ApexHours = require("./ApexHours");
const salesforcecodex = require ("./SalesforceCodex");
const SalesforceDeveloperBlog = require ("./SalesforceDeveloperBlog");
const SalesforceEngineering =  require ("./SalesforceEngineering");
const AutomationChampion = require ("./AutomationChampions");
const SFBenDev = require("./SFBenDev");
const express = require("express");

const app = express();
const PORT = 8000;

app.get("/articles",async (req,res) =>{
  try {
    const data = await SalesforceDeveloperBlog();
    console.log('first',data);
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message:' fetching the Blogs'})
  }
  
});


app.listen(PORT, () => console.log(`Server Started at PORT: `,{PORT}));
