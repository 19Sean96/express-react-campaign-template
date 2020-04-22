import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Showcase from "./components/Showcase";
import Wishlist from "./components/Wishlist";
import Footer from "./components/Footer";
import WishlistHowTo from "./components/WishlistHowTo";
import axios from "axios";
import { InView } from "react-intersection-observer";
import { Route, useParams } from "react-router-dom";

if (process.env.NODE_ENV === "development") {
  // proxy
  axios.defaults.baseUrl = "http://localhost:5000";
}

function App() {
  return (
    <div className="App">
      {/*
          THIS WILL ONLY SHOW A CAMPAIGN PAGE (INCLUDING LOADING CIRCLE) ONCE A URL PARAM IS DETECTED
        */}
      <Route path="/:campaign">
        <Campaign />
      </Route>
    </div>
  );
}

function Campaign() {
  // takes campaign name from URL
  let { campaign } = useParams();

  //  tracks state of wishlist cart and all details within (custom notes, design numbers, image URL, etc.)
  const [wishlist, updateWishlist] = useState([]);

  // tracks the currently active category for items in the 'Showcase'. Affects what items are shown
  const [activeCategory, updateActiveCategory] = useState("all");

  // tracks whether or not a modal (single item modal, multi item modal, & WishlistHowTo component) is visible
  const [modalIsOpen, triggerModal] = useState(false);

  // tracks the "close modal" event
  const [modalWasClosed, modalClose] = useState(false);

  // FALSE when no data has been loaded from the API.
  // TRUTHY when data IS loaded from the API and assembled
  const [data, loadData] = useState(false);

  const [headerVisible, updateVisibility] = useState(true);

  useEffect(() => {
    // THIS HANDLES THE "HOW-TO" MODAL WHICH POPULATES ON INITIAL LOAD
    !modalWasClosed
      ? setTimeout(() => {
          triggerModal(true);
        }, 1000)
      : triggerModal(false);
  }, [modalIsOpen]);

  useEffect(() => {
    // SENDS REQ TO EXPRESS TO MAKE API CALL TO DIRECTUS TO GRAB CAMPAIGN DATA
    axios.get(`/api/${campaign}`).then((res) => {
      const campaignData = assembleData(
        res.data.details,
        res.data.photos,
        res.data.products,
        res.data.tiles,
        res.data.categories
      );
      loadData(campaignData);
    });
  }, []);

  return (
    <>
      {/* IF THE DATA HAS BEEN LOADED - SHOW CAMPAIGN PAGE. OTHERWISE, SHOW LOADING ICON */}
      {data ? (
        <>
          <WishlistHowTo
            closeModal={() => {
              triggerModal(false);
              modalClose(true);
            }}
            isOpen={modalIsOpen}
            color={data.client.color}
          />
          <InView
            as="div"
            onChange={(inView, entry) => inView ? updateVisibility(true) : updateVisibility(false)}
          >
            <Header
              className="campaign-header"
              clientInfo={data.client}
            ></Header>
          </InView>
          <Nav
            categories={data.categories}
            color={data.client.color}
            updateActiveCategory={updateActiveCategory}
            wishlistCount={wishlist.length}
            activeCategory={activeCategory}
            headerVisible={headerVisible}
          />
          <Showcase
            wishlist={wishlist}
            addItem={(item) => {
              return wishlist.includes(item)
                ? updateWishlist((wishlist) =>
                    wishlist.filter((wishlistItem) => wishlistItem !== item)
                  )
                : updateWishlist((wishlist) => [...wishlist, item]);
            }}
            products={data.items}
            activeCategory={activeCategory}
            color={data.client.color}
          />
          <Wishlist
            removeItem={(item) => {
              const removedItemName = item.alt;
              const newWishlist = wishlist.filter(
                (wishlistItem) => wishlistItem.alt !== removedItemName
              );
              updateWishlist(newWishlist);
            }}
            wishlist={wishlist}
            updateValue={(value, index) => {
              wishlist[index].value = value;
            }}
            color={data.client.color}
          />
          <Footer color={data.client.color} />
        </>
      ) : (
        // IF THE DATA IS STILL BEING PROCESSED, SHOW LOADING SCREEN
        <div id="loadingbar-background">
          <svg id="loadingbar" viewBox="25 25 50 50">
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      )}
    </>
  );
}

const determineTileType = (products, id) => {
  let count = 0;
  products.map((prod) => {
    if (prod.tile_parent === id) {
      count++;
    }
  });
  // 'false' = MULTI ITEM TILE ; 'true' = SINGLE ITEM TILE
  if (count > 1) return false;
  else return true;
};
function assembleData(details, photos, products, tiles, categories) {
  // 'data' is the template we use to organize and tie the campaign data together
  const data = {
    categories: ["all"],
    client: {
      name: `${details.client_name} - ${details.title}`,
      logo:
        photos[photos.findIndex((img) => img.id === details.logo)].data
          .full_url,
      logoWidth: details.logo_width,
      background:
        photos[photos.findIndex((img) => img.id === details.background_image)]
          .data.full_url,
      color: details.color,
    },

    items: [],
  };

  products = products.map((prod) => {
    return {
      tile_parent: prod.tile,
      key: prod.design_number,
      // ASSIGNS IMAGE BASED ON THE IMAGE ID ON THE PRODUCT PAGE
      img:
        photos[photos.findIndex((image) => image.id === prod.image)].data
          .full_url,
      alt: prod.product_name,
      select: false,
      value: "",
    };
  });
  console.log(tiles);
  tiles
    .sort((current, next) => current.category - next.category)
    .map((tile) => {
      /*
      WHEN THE API CALL IS MADE, WE GET BACK THE FULL LIST. 
      WE ONLY NEED THE RELEVANT CATEGORIES TO FILTER THROUGH THE PRODUCTS.
    */
      data.categories.push(
        // PUSH THE CATEGORY ONLY IF A TILE CONTAINS THAT CATEGORY ID
        categories[categories.findIndex((cat) => cat.id === tile.category)]
          .category_name
      );
      // '...new Set()' WILL TRIM ANY DUPLICATE CATEGORIES FROM THE LIST, & RETURN IT BACK TO ITSELF
      data.categories.splice(
        0,
        data.categories.length,
        ...new Set(data.categories)
      );

      // PUSHES THE TILE/PRODUCT PAIRS INTO 'data.items'
      data.items.push({
        id: tile.id,
        name: tile.title,
        singleItem: determineTileType(products, tile.id),
        background:
          photos[photos.findIndex((img) => img.id === tile.display_image)].data
            .full_url,
        category:
          categories[
            categories.findIndex((category) => category.id === tile.category)
          ].category_name,
        designParent: tile.design_parent,
        columns: tile.column_width,
        products: products.filter((prod) => prod.tile_parent === tile.id),
      });
    });

  return data;
}

export default App;
