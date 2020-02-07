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

if (process.env.NODE_ENV === 'development') {

  axios.defaults.baseUrl = "http://localhost:5000";
}


function App() {
  return (
    <div className="App">
      <Route path="/:campaign">
        <Campaign />
      </Route>
    </div>
  );
}

function Campaign() {
  let { campaign } = useParams();
  const [loading, setLoading] = useState(true);
  const [wishlist, updateWishlist] = useState([]);
  const [activeCategory, updateActiveCategory] = useState("all");
  const [modalIsOpen, triggerModal] = useState(false);
  const [modalWasClosed, modalClose] = useState(false);
  const [data, loadData] = useState(false);

  useEffect(() => {
    !modalWasClosed
      ? setTimeout(() => {
          triggerModal(true);
        }, 1000)
      : triggerModal(false);
  });
  useEffect(() => {
    axios.get(`/api/${campaign}`).then(res => {
      console.log("Here are the categories...", res.data.categories)
      const campaignData = assembleData(
        res.data.details,
        res.data.photos,
        res.data.products,
        res.data.tiles,
        res.data.categories
      );
      console.log("This is the FULL campaign data", campaignData);
      loadData(campaignData);
    });
  }, []);
  return (
    <>
      {data ? (
        <>
          <WishlistHowTo
            closeModal={() => {
              triggerModal(false);
              modalClose(true);
            }}
            isOpen={modalIsOpen}
          />
          <Header className="campaign-header" clientInfo={data.client} bg={data.client.background}></Header>
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
function assembleData(details, photos, products, tiles, categories) {
  console.log(categories)
  const data = {
    categories: ["all"],
    client: {
      name: `${details.client_name} - ${details.title}`,
      logo:
        photos[photos.findIndex(img => img.id === details.logo)].data
          .full_url,
      background:
        photos[
          photos.findIndex(img => img.id === details.background_image)
        ].data.full_url
    },

    items: []
  };

  products = products.map(prod => {
    return {
      tile_parent: prod.tile,
      key: prod.design_number,
      img:
        photos[photos.findIndex(image => image.id === prod.image)].data
          .full_url,
      alt: prod.product_name,
      select: false
    };
  });

  tiles.map(tile => {
    console.log(categories[categories.findIndex(cat => cat.id === tile.category)].category_name);
    data.categories.push(
      categories[categories.findIndex(cat => cat.id === tile.category)].category_name
    );
    data.categories.splice(0, data.categories.length, ...(new Set(data.categories)))

    data.items.push({
      id: tile.id,
      name: tile.titile,
      singleItem: determineTileType(products, tile.id),
      background:
        photos[photos.findIndex(img => img.id === tile.display_image)].data
          .full_url,
      category:
        categories[
          categories.findIndex(category => category.id === tile.category)
        ].category_name,
      designParent: tile.design_parent,
      columns: tile.column_width,
      products: products.filter(prod => prod.tile_parent === tile.id)
    });
  });

  return data;
}

export default App;
