const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();

// Serve the static files from the React app
//app.use(express.static('client/build');
app.use('/static', express.static(path.join(__dirname, "/client/build/static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("THIS IS DIR", path.join(__dirname, "/client/build/"))

if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  app.use(cors());
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// ROUTES



// app.get("/", (req,res) => {
  //   console.log("HEY! YOU REACHED THE MAIN PAGE")
  //   res.json({main: 0})
  // });
  
  // STORAGE BUCKET TO BE RETURNED
  let CAMPAIGN_DATA = {};
  
  app.get("/api/:campaign", async (req, res, next) => {
    
    // GRABS THE CAMPAIGN THE USER NAVIGATSE TO
    const campaignName = req.params.campaign;
    console.log(campaignName);
    //   SECRETS
    const KEY = process.env.CMS_API_KEY;
    const URL = process.env.CMS_URL_DEV;
    
    //   ==============================================================================
    // FIRST API CALL
    const URL_1 = `${URL}items/campaigns?filter[title][eq]=${campaignName}&access_token=${KEY}`;
    const campaign = await axios.get(URL_1);
    CAMPAIGN_DATA.details = campaign.data.data[0];
    console.log(CAMPAIGN_DATA.details)
    /* example return: 
    "details": {
      "campaign_name": "LSA",
      "client_logo": 3,
      "client_name": "Kiewit",
      "campaign_background_image": 13,
      "tag": "lsa",
      "id": 1,
      "status": "draft"
    } 
    */
   //   ==============================================================================
   
   const URL_2 = `${URL}files?filter[tags][eq]=${CAMPAIGN_DATA.details.tag}&fields=data,id&access_token=${KEY}`;
   const URL_3 = `${URL}items/products?filter[campaign][eq]=${CAMPAIGN_DATA.details.id}&access_token=${KEY}`;
   const URL_4 = `${URL}items/tiles?filter[campaign][eq]=${CAMPAIGN_DATA.details.id}&access_token=${KEY}`;
   const URL_5 = `${URL}items/categories?fields=id,category_name&access_token=${KEY}`
   
   const [ photos, products, tiles, categories] = await axios.all([
     axios.get(URL_2),
     axios.get(URL_3),
     axios.get(URL_4),
     axios.get(URL_5)
    ])
    
    CAMPAIGN_DATA.photos = photos.data.data;
    CAMPAIGN_DATA.tiles = tiles.data.data;
    CAMPAIGN_DATA.products = products.data.data;
    CAMPAIGN_DATA.categories = categories.data.data;
    res.send(CAMPAIGN_DATA);
  });
  
  app.get('*', (req,res) => {
    console.log(req.params)
    res.sendFile('index.html', {root: path.join(__dirname, '/client/build')})
  })
  
  // console.log(CAMPAIGN_DATA)
  
  // app.get('*', (req, res)=>{
    // res.sendFile(path.resolve(where, the, index.html, is))
    // })
    
