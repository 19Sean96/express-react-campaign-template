const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transport = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  service: "Hotmail",
  port: 25,
  auth: {
    user: process.env.SENDING_EMAIL,
    pass: process.env.SENDING_EMAIL_PW
  }
});

// Serve the static files from the React app
//app.use(express.static('client/build');
// app.use(
//   "/static",
//   express.static(path.join(__dirname, "/client/build/static"))
// );
app.use(express.static(path.join(__dirname, "/client/build/")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  const cors = require("cors");
  app.use(cors());
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// ROUTES

// STORAGE BUCKET TO BE RETURNED
let CAMPAIGN_DATA = {};

app.get("/api/:campaign", async (req, res, next) => {
  // GRABS THE CAMPAIGN THE USER NAVIGATSE TO
  const campaignName = req.params.campaign;
  //   SECRETS
  const KEY = process.env.CMS_KEY;
  const URL = process.env.CMS_URL;

  //   ==============================================================================
  // FIRST API CALL
  const URL_1 = `${URL}items/campaigns?filter[tag][eq]=${campaignName}&access_token=${KEY}`;
  const campaign = await axios.get(URL_1);
  CAMPAIGN_DATA.details = campaign.data.data[0];
  CAMPAIGN_DATA.details.tag = campaignName;
  console.log(CAMPAIGN_DATA.details);
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

  const URL_2 = `${URL}files?filter[tags][contains]=${CAMPAIGN_DATA.details.tag}&fields=data,id&access_token=${KEY}`;
  const URL_3 = `${URL}items/products?filter[campaign][eq]=${CAMPAIGN_DATA.details.id}&access_token=${KEY}`;
  const URL_4 = `${URL}items/tiles?filter[campaign][eq]=${CAMPAIGN_DATA.details.id}&access_token=${KEY}`;
  const URL_5 = `${URL}items/categories?fields=id,category_name&access_token=${KEY}`;

  const [photos, products, tiles, categories] = await axios.all([
    axios.get(URL_2),
    axios.get(URL_3),
    axios.get(URL_4),
    axios.get(URL_5)
  ]);

  CAMPAIGN_DATA.photos = photos.data.data;
  CAMPAIGN_DATA.tiles = tiles.data.data;
  CAMPAIGN_DATA.products = products.data.data;
  CAMPAIGN_DATA.categories = categories.data.data;
  res.send(CAMPAIGN_DATA);
});

app.post("/api/sendemail", (req, res) => {
  console.log(req)

  const productsHtml = req.body.products.map((product,index) => {

    return `
      <div class="product">
        <tr>
          <th colspan=3 class="subtitle">
            <h3>Product ${index}:</h3>
          </th>
        </tr>
        <tr class="product-row">
          <td>Product Name: </td>
          <td colspan=2>${product.tile.name}</td>
        </tr>
        <tr class="product-row">
          <td>Design Number/Parent: </td>
          <td colspan=2>${product.tile.designParent}</td>
        </tr>
        <tr class="product-row">
          <td>Comment: </td>
          <td colspan=2>${product.note.value}</td>
        </tr>
        <tr class="empty-row">

        </tr>
      </div>
    `
  }).join('');

  const html = `
  <head>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet">
    <style>
    body {
      background-color: #fff;
    }

    * {
      font-family: 'Open Sans',Helvetica, sans-serif;
      color: #000;
    }

    .title {
      background-color: #e5e5e5;
    }
    
    .subtitle {
      background-color: #f4f4f4;
      color: #000;
    }

    .product-row td {
      height: 30px;    
      background-color: #fff;
    }

    .empty-row {
      height: 50px;
    }

    table {
      table-layout: fixed;
      width: 80%;
      max-width: 600px;
      margin: 40px auto;
      background-color: #fff;
      height: 50px;
    }

    .client-row {
      background-color: #fff;
      color: #000;
    }
    
    .client-row td {
      height: 30px;
    }

    .message-title td{
      text-align: center;
      height: 30px;    
      color: #000;
      background-color: #fff;
      font-weight: bolder;
      padding-top: 25px;
    }

    .message-text td{
      height: 30px;    
      color: #000;
      background-color: #fff;        
      padding: 0px 30px 20px;
    }
      
      </style>
    </head>
    <body>

      <h1>New Campaign Product Request</h1>
      <table role=”presentation” cellspacing=0 cellpadding=5 border=0>
        <caption></caption>
        <tbody>
        <tr>
          <th colspan="3" class="title">
            <h2>Client Details</h2>
          </th>
        </tr>
        <tr class="client-row">
          <td style="font-weight: bold">Campaign: </td>
          <td colspan=2>${req.body.campaign}</td>
        </tr>
        <tr class="client-row">
          <td style="font-weight: bold">Name: </td>
          <td colspan=2>${req.body.name}</td>
        </tr>
        <tr class="client-row">
          <td style="font-weight: bold">Email: </td>
          <td colspan=2>${req.body.email}</td>
        </tr>
        <tr class="client-row">
          <td style="font-weight: bold">Phone: </td>
          <td colspan=2>${req.body.phone}</td>
        </tr>
        <tr class="client-row">
          <td style="font-weight: bold">Company: </td>
          <td colspan=2>${req.body.company}</td>
        </tr>
        <tr class="message-title">
          <td colspan=3 style="font-weight: bold">Message</td>
        </tr>
        <tr class="message-text">
          <td colspan=3>${req.body.comments}</td>
        </tr>
      </tbody>
      </table>
      <br>
      <table role=”presentation” cellspacing=0 cellpadding=5 border=0>
        <tbody>
          <tr>
            <th colspan="3" class="title">
              <h2>Product Details</h2>
            </th>
          </tr>
          ${productsHtml}
        </tbody>
      </table>
    </body>`;

  const message = {
    from: process.env.SENDING_EMAIL,
    to: process.env.RECEIVING_EMAIL,
    subject: `Campaign - ${req.body.campaign} - ${req.body.name}`,
    html: html
  };

  transport.sendMail(message, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
    res.send(info)
  });
});

app.get("*", (req, res) => {
  console.log("THIS IS PARAMS")
  console.log(req.params);
  console.log("========================")
  res.sendFile("index.html", { root: path.join(__dirname, "/client/build") });
});
