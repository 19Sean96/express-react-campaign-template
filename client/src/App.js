import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Showcase from "./components/Showcase";
import Wishlist from "./components/Wishlist";
import Footer from "./components/Footer";
import WishlistHowTo from "./components/WishlistHowTo";
import data from "./source";
import axios from "axios";
import { Route, useParams } from "react-router-dom";

//if (process.env.NODE_ENV === 'development') {

  axios.defaults.baseUrl = "http://localhost:5000";
//s}

const NavCategories = ["all", "banner", "sign", "decal", "apparel"];

// 1. INITIATE LOADING SCREEN ON LOAD
// 2. DO API CALLS IN MEANTIME
// 3. ASSEMBLE DATA FOR APP TO RENDER
// 4. SWITCH LOADING TO 'false'

function App() {
  return (
    <div className="App">
	<h1>Looks like you need to enter a route!</h1>
      <Route path="/:campaign">
        <Campaign />
      </Route>
    </div>
  );
}

function Campaign() {
  let { campaign } = useParams();
  console.log(campaign);
  const [loading, setLoading] = useState(true);
  const [wishlist, updateWishlist] = useState([]);
  const [activeCategory, updateActiveCategory] = useState("all");
  const [modalIsOpen, triggerModal] = useState(false);
  const [modalWasClosed, modalClose] = useState(false);

  let categories = [
    {
      type: "banner",
      id: 2
    },
    {
      type: "sign",
      id: 3
    },
    {
      type: "decal",
      id: 4
    },
    {
      type: "apparel",
      id: 5
    },
    {
      type: "safety",
      id: 6
    },
    {
      type: "utility",
      id: 7
    }
  ];

  const [data, loadData] = useState(false);

  useEffect(() => {
    !modalWasClosed
      ? setTimeout(() => {
          triggerModal(true);
        }, 1000)
      : triggerModal(false);
  });
  useEffect(() => {
    axios.get(`/${campaign}`).then(res => {
      const campaignData = assembleData(
        res.data.details,
        res.data.photos,
        res.data.products,
        res.data.tiles,
        res.data.categories
      );
      console.log(campaignData);
      loadData(campaignData);
    });
  }, []);
  return (
    <>
	<h1>Hello World!</h1>
      {data ? (
        <>
          <WishlistHowTo
            closeModal={() => {
              triggerModal(false);
              modalClose(true);
            }}
            isOpen={modalIsOpen}
          />
          <Header className="campaign-header" clientInfo={data.client}></Header>
          <Nav
            categories={data.categories}
            updateActiveCategory={updateActiveCategory}
            wishlistCount={wishlist.length}
            activeCategory={activeCategory}
          />
          <Showcase
            addItem={(item, index) => {
              return wishlist.includes(item)
                ? ""
                : updateWishlist(wishlist => [...wishlist, item]);
            }}
            products={data.items}
            activeCategory={activeCategory}
          />
          <Wishlist
            removeItem={item => {
              const removedItemName = item.name;
              const newWishlist = wishlist.filter(
                wishlistItem => wishlistItem.name !== removedItemName
              );
              updateWishlist(newWishlist);
            }}
            wishlist={wishlist}
          />
          <Footer />
        </>
      ) : null}
    </>
  );
}

const determineTileType = (products, id) => {
  let count = 0;
  products.map(prod => {
    if (prod.tile_parent === id) {
      count++;
    }
  });

  if (count > 1) return false;
  else return true;
};
function assembleData(campaign, images, products, tiles, categories) {
  console.log(categories);
  const data = {
    categories: ["all"],
    client: {
      name: `${campaign.client_name} - ${campaign.campaign_name}`,
      logo:
        images[images.findIndex(img => img.id === campaign.client_logo)].data
          .full_url,
      background:
        images[
          images.findIndex(img => img.id === campaign.campaign_background_image)
        ].data.full_url
    },

    items: []
  };

  products = products.map(prod => {
    return {
      tile_parent: prod.tile_parent,
      key: prod.design_number,
      img:
        images[images.findIndex(image => image.id === prod.product_image)].data
          .full_url,
      alt: prod.product_name,
      select: false
    };
  });

  tiles.map(tile => {
    data.categories.push(
      categories[categories.findIndex(cat => cat.id === tile.category)].category
    );
    data.categories.splice(0, data.categories.length, ...(new Set(data.categories)))

    data.items.push({
      id: tile.id,
      name: tile.tile_name,
      singleItem: determineTileType(products, tile.id),
      background:
        images[images.findIndex(img => img.id === tile.display_image)].data
          .full_url,
      category:
        categories[
          categories.findIndex(category => category.id === tile.category)
        ].category,
      designParent: tile.design_parent,
      columns: tile.column_width,
      products: products.filter(prod => prod.tile_parent === tile.id)
    });
  });

  return data;
}

export default App;
