import React, { Component } from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import OffClick from "react-offclick";

const StyledBtn1 = styled.button`
  border: 3px solid ${props => props.color};
  color: #cbcaca;
  background-color: transparent;
  transition: 0.25s all ease-in;
  position: relative;
  z-index: 20;
  overflow: hidden;

  span {
    position: relative;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0px;
    background-color: ${props => props.color};
    transition: 0.2s all ease-in-out;
  }

  &:hover {
    color: #000;
    &::before {
      height: 100%;
    }
  }

  @media screen and (max-width: 1550px) {
    border-width: 2px;
  }
`;

const StyledBtn2 = styled.button`
  background-color: ${props => (props.isModalBtn ? "#000" : props.color)};
  transition: 0.15s all ease-in;
  position: relative;
  z-index: 20;
  overflow: hidden;
  padding-right: 4.5rem;

  span {
    display: block;
    transform: translateX(1.25rem);
    color: ${props => (props.isModalBtn ? "#fff" : "#000")};
    transition: 0.2s all ease;
  }

  .cta-addToList--icon-1 {
    opacity: 1;
    transition: 0.2s opacity ease-out;
    svg g > * {
      stroke: ${props => (props.isModalBtn ? props.color : "#fff")};
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    height: 0%;
    width: 100%;
    background-color: ${props => (props.isModalBtn ? props.color : "#fff")};
    transition: 0.2s all ease;
  }

  &:hover {
    span {
      color: #000;
    }
    &::before {
      height: 100%;
    }
    .cta-addToList--icon-1 {
      opacity: 0;
    }
  }
`;

const StyledMultiBtn = styled.div`
  transition: 0.13s background-color ease-out;
  background-color: ${props => (props.isClicked ? props.color : "#0e0d0d")};
  width: ${props => (props.isClicked ? "12.5rem" : "6rem")};
  height: 2.8vmax;
  min-height: 6rem;
  svg:first-child g > * {
    stroke: ${props => props.color};
  }

  #check path {
    stroke: #fff !important;
  }

  &:hover {
    background-color: ${props => props.color} !important;
  }
`;

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      itemType: null,
      open: false,
      modal: {
        singleItem: {
          img: "",
          name: "",
          index: null
        },
        multiItem: {
          name: "",
          products: [],
          index: null
        }
      }
    };
  }

  expandSingleItem(img, name, index, product, id) {
    this.setState({
      itemType: "single",
      open: true,
      modal: {
        singleItem: {
          img,
          name,
          index,
          product,
          id
        },
        multiItem: {
          name: "",
          products: []
        }
      }
    });
  }

  expandMultiItem(name, index, products) {
    this.setState({
      itemType: "multi",
      open: true,
      modal: {
        singleItem: {
          img: "",
          name: "",
          index: null
        },
        multiItem: {
          name,
          products,
          index
        }
      }
    });
  }

  render() {
    const noScroll = `
      *:not(.zoomModal--multi) {
        overflow-y: hidden;
      }
    `;
    const noClick = `
      #Showcase:not(.zoomModal) {
        pointer-events: none;
      }
    `
    const [color, colorLight, colorDark] = this.props.colors;
    return (
      <main id="Showcase" className="showcase_grid" ref={this.myRef}>
        {this.state.itemType === "multi" && this.state.open && (
          <style>{noScroll}</style>
        )}
        {this.state.open && (
          <style>
            {noClick}
          </style>
        )}
        {this.props.products.map((product, index) => {
          return (
            <div
              key={index}
              className={`showcase_grid_item showcase_grid_item--colspread_${
                product.columns
              } ${
                product.category === this.props.activeCategory ||
                this.props.activeCategory === "all"
                  ? ""
                  : "notActive"
              }`}
              category={product.category}
            >
              <p className="showcase_grid_item-name">{product.name}</p>
              <img
                src={product.background}
                alt={product.name}
                className="showcase_grid_item_image"
              />
              <div
                className={`showcase_grid_item-cta showcase_grid_item-cta-${product
                  .products.length > 1 && "multi"}`}
              >
                <p className="showcase_grid_item-cta_title">{product.name}</p>
                <div className="showcase_grid_item-cta_btn--container">
                  {product.products.length == 1 ? (
                    <>
                      <StyledBtn1
                        name="zoom-btn"
                        className="cta-zoomIn showcase_grid_item-cta_btn"
                        color={color}
                        colorLight={colorLight}
                        colorDark={colorDark}
                        type="button"
                        onClick={e =>
                          this.expandSingleItem(
                            product.background,
                            product.name,
                            index,
                            product.products[0],
                            product.id
                          )
                        }
                      >
                        <span name="zoom-btn">zoom in</span>
                        <div className="cta-zoomIn--icon" name="zoom-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 47.67 47.67"
                            id="zoomIcon"
                          >
                            <g transform="translate(-340.037 -491.037)">
                              <circle
                                cx="16"
                                cy="16"
                                r="16"
                                transform="translate(341 492)"
                                fill="none"
                                stroke="#fff"
                                strokeMiterlimit="10"
                                strokeWidth="4.5"
                              />
                              <line
                                x2="18.686"
                                y2="18.686"
                                transform="translate(368.314 519.314)"
                                fill="none"
                                stroke="#fff"
                                strokeMiterlimit="10"
                                strokeWidth="4.5"
                              />
                            </g>
                          </svg>
                        </div>
                      </StyledBtn1>
                      <StyledBtn2
                        onClick={() =>
                          this.props.addItem(product.products[0], index)
                        }
                        className="cta-addToList showcase_grid_item-cta_btn"
                        type="button"
                        color={color}
                        isModalBtn={false}
                      >
                        <span>
                          {this.props.wishlist.some(
                            wishlistProd =>
                              wishlistProd.tile_parent === product.id
                          )
                            ? "added!"
                            : "add to list"}
                        </span>
                        {this.props.wishlist.some(
                          wishlistProd =>
                            wishlistProd.tile_parent === product.id
                        ) ? (
                          <>
                            <div className="cta-addToList--icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25.926 25.926"
                                id="addToListCheck"
                              >
                                <g
                                  id="check"
                                  transform="translate(-0.281 -0.281)"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    transform="translate(1.244 1.244)"
                                    stroke="#000"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.926"
                                  />
                                  <line
                                    x2="13"
                                    transform="translate(6.744 13.244)"
                                    fill="none"
                                    stroke="#000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    opacity="0"
                                  />
                                  <line
                                    y1="13"
                                    transform="translate(13.244 6.744)"
                                    fill="none"
                                    stroke="#000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    opacity="0"
                                  />
                                  <path
                                    d="M3015.288,2664.107l4.435,4.435,10.522-10.522"
                                    transform="translate(-3009.52 -2650.321)"
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth="3"
                                  />
                                </g>
                              </svg>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="cta-addToList--icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25.926 25.926"
                                id="addToListIcon1"
                              >
                                <g transform="translate(0.792 0.792)">
                                  <line
                                    x2="10"
                                    transform="translate(7.171 12.171)"
                                    fill="none"
                                    stroke="#fff"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                  <line
                                    y1="10"
                                    transform="translate(12.171 7.171)"
                                    fill="none"
                                    stroke="#fff"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    transform="translate(0.171 0.171)"
                                    fill="none"
                                    stroke="#fff"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.926"
                                  />
                                </g>
                              </svg>
                            </div>

                            <div className="cta-addToList--icon cta-addToList--icon-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25.926 25.926"
                                id="addToListIcon2"
                              >
                                <g transform="translate(-0.281 -0.281)">
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    transform="translate(1.244 1.244)"
                                    fill={color}
                                    stroke={color}
                                    strokeMiterlimit="10"
                                    strokeWidth="1.926"
                                  />
                                  <line
                                    x2="13"
                                    transform="translate(6.744 13.244)"
                                    fill="none"
                                    stroke="#fff"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                  <line
                                    y1="13"
                                    transform="translate(13.244 6.744)"
                                    fill="none"
                                    stroke="#fff"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                </g>
                              </svg>
                            </div>
                          </>
                        )}
                      </StyledBtn2>
                    </>
                  ) : (
                    <>
                      <StyledBtn1
                        className="cta-viewAll showcase_grid_item-cta_btn"
                        color={color}
                        colorLight={colorLight}
                        colorDark={colorDark}
                        onClick={e =>
                          this.expandMultiItem(
                            product.name,
                            index,
                            product.products
                          )
                        }
                      >
                        see all
                      </StyledBtn1>
                    </>
                  )}
                </div>
              </div>
              <span className="mobileAddItem--container">
                {product.singleItem ? (
                  <StyledMultiBtn
                    isModalBtn={false}
                    onClick={() =>
                      this.props.addItem(product.products[0], index)
                    }
                    className="mobileAddItem"
                    color={color}
                    isClicked={this.props.wishlist.some(
                      wishlistProd => wishlistProd.tile_parent === product.id
                    )}
                  >
                    {this.props.wishlist.some(
                      wishlistProd => wishlistProd.tile_parent === product.id
                    ) ? (
                      <>
                        <svg
                          className="mobileAddItem-check"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25.926 25.926"
                        >
                          <g id="check" transform="translate(-0.281 -0.281)">
                            <circle
                              cx="12"
                              cy="12"
                              r="12"
                              transform="translate(1.244 1.244)"
                              stroke="#000"
                              strokeMiterlimit="10"
                              strokeWidth="1.926"
                            />
                            <path
                              d="M3015.288,2664.107l4.435,4.435,10.522-10.522"
                              transform="translate(-3009.52 -2650.321)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="3"
                            />
                          </g>
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25.926 25.926"
                          className="mobileAddItem__1"
                        >
                          <g transform="translate(0.792 0.792)">
                            <line
                              x2="10"
                              transform="translate(7.171 12.171)"
                              fill="none"
                              stroke="#000"
                              strokeMiterlimit="10"
                              strokeWidth="2"
                            />
                            <line
                              y1="10"
                              transform="translate(12.171 7.171)"
                              fill="none"
                              stroke="#000"
                              strokeMiterlimit="10"
                              strokeWidth="2"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="12"
                              transform="translate(0.171 0.171)"
                              fill="none"
                              stroke="#000"
                              strokeMiterlimit="10"
                              strokeWidth="1.926"
                            />
                          </g>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25.926 25.926"
                          className="mobileAddItem__2"
                        >
                          <g transform="translate(-0.281 -0.281)">
                            <circle
                              cx="12"
                              cy="12"
                              r="12"
                              transform="translate(1.244 1.244)"
                              fill="#fff"
                              stroke="#fff"
                              strokeMiterlimit="10"
                              strokeWidth="1.926"
                            />
                            <line
                              x2="13"
                              transform="translate(6.744 13.244)"
                              fill="none"
                              stroke={color}
                              strokeMiterlimit="10"
                              strokeWidth="2"
                            />
                            <line
                              y1="13"
                              transform="translate(13.244 6.744)"
                              fill="none"
                              stroke={color}
                              strokeMiterlimit="10"
                              strokeWidth="2"
                            />
                          </g>
                        </svg>
                      </>
                    )}
                    <span
                      className={
                        this.props.wishlist.some(
                          wishlistProd =>
                            wishlistProd.tile_parent === product.id
                        )
                          ? "added-btn"
                          : ""
                      }
                    >
                      {this.props.wishlist.some(
                        wishlistProd => wishlistProd.tile_parent === product.id
                      )
                        ? "added!"
                        : ""}
                    </span>
                  </StyledMultiBtn>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27.13 21.412"
                    id="multiIcon"
                  >
                    <g id="multi_item" opacity="0.167">
                      <path
                        d="M-34.44,300.4H-51.774V288.78a2.939,2.939,0,0,1,2.935-2.935h17.333V297.46a2.916,2.916,0,0,1-.86,2.075A2.916,2.916,0,0,1-34.44,300.4Zm-16.507-.827H-34.44a2.093,2.093,0,0,0,1.49-.617,2.093,2.093,0,0,0,.618-1.491V286.672H-48.839a2.111,2.111,0,0,0-2.108,2.108Z"
                        transform="translate(51.774 -278.984)"
                        fill="#030504"
                      />
                      <path
                        d="M-19.761,285.951H-20.9v-.827h1.144a1.876,1.876,0,0,0,1.874-1.874V272.227H-34.628A1.876,1.876,0,0,0-36.5,274.1v1.144h-.827V274.1a2.7,2.7,0,0,1,2.7-2.7H-17.06v11.85A2.7,2.7,0,0,1-19.761,285.951Z"
                        transform="translate(40.76 -267.969)"
                        fill="#030504"
                      />
                      <path
                        d="M-5.316,271.507H-6.46v-.827h1.144a1.876,1.876,0,0,0,1.874-1.873V257.783H-20.183a1.876,1.876,0,0,0-1.874,1.874V260.8h-.827v-1.144a2.7,2.7,0,0,1,2.7-2.7H-2.615v11.85A2.7,2.7,0,0,1-5.316,271.507Z"
                        transform="translate(29.746 -256.956)"
                        fill="#030504"
                      />
                      <path
                        d="M-27.349,317.651a2.98,2.98,0,0,1-2.977-2.977,2.98,2.98,0,0,1,2.977-2.977,2.98,2.98,0,0,1,2.977,2.977A2.98,2.98,0,0,1-27.349,317.651Zm0-5.126a2.152,2.152,0,0,0-2.15,2.149,2.152,2.152,0,0,0,2.15,2.15,2.152,2.152,0,0,0,2.15-2.15A2.152,2.152,0,0,0-27.349,312.524Z"
                        transform="translate(35.42 -298.696)"
                        fill="#030504"
                      />
                      <path
                        d="M-3.306,306.153H-8.741v-5.435h5.435Zm-4.608-.827h3.781v-3.78H-7.914Z"
                        transform="translate(18.962 -290.324)"
                        fill="#030504"
                      />
                    </g>
                  </svg>
                )}
              </span>
            </div>
          );
        })}
        {this.state.open && (
          <ShowcaseModal
            wishlist={this.props.wishlist}
            colors={this.props.colors}
            itemType={this.state.itemType}
            open={this.state.open}
            productInfo={
              this.state.itemType === "single"
                ? this.state.modal.singleItem
                : this.state.modal.multiItem
            }
            addItem={this.props.addItem}
            // openSingle={}
            // openMulti={}
            closeModal={e => {
              this.setState({
                itemType: null,
                open: false,
                modal: {
                  singleItem: {
                    img: "",
                    name: "",
                    index: null
                  },
                  multiItem: {
                    name: "",
                    products: [],
                    index: null
                  }
                }
              });
            }}
          />

        )}
      </main>
    );
  }
}

function ShowcaseModal(props) {
  const { productInfo } = props;
  const duration = 225;
  const Style = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: `${props.open ? 1 : 0}`,
  }
  return (
    <OffClick handler={() => props.open && props.closeModal()}>
      <div
        className={`${
          props.itemType !== "single" ? "zoomModal--multi__container" : ""
        }`}
      >
        <article
          id={`${props.itemType}Modal`}
          className={`zoomModal ${props.open && "zoomModal--active"} ${
            props.itemType === "single" ? "" : "zoomModal--multi"
          }`}
        >
          {props.itemType === "single" ? (
            <>
              <h2 className="zoomModal_name">{productInfo.name}</h2>
              <div className="zoomModal-close" onClick={props.closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.414 29.414"
                >
                  <g id="Cross" transform="translate(0.397 0.707)">
                    <line
                      x2="28"
                      y2="28"
                      transform="translate(0.31)"
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                    <line
                      y1="28"
                      x2="28"
                      transform="translate(0.31)"
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <div className="zoomModal_img--container">
                <img
                  src={productInfo.img}
                  alt={productInfo.name}
                  className="zoomModal_img"
                  onClick={e => console.log("you clicked the image")}
                />
              </div>
              <StyledBtn2
                onClick={() =>
                  props.addItem(productInfo.product, productInfo.index)
                }
                className="zoomModal-addToList cta-addToList showcase_grid_item-cta_btn"
                type="button"
                color={props.colors[0]}
                isModalBtn={true}
              >
                <span>
                  {props.wishlist.some(
                    wishlistProd => wishlistProd.tile_parent === productInfo.id
                  )
                    ? "added!"
                    : "add to list"}
                </span>
                {props.wishlist.some(
                  wishlistProd => wishlistProd.tile_parent === productInfo.id
                ) ? (
                  <>
                    <div className="cta-addToList--icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25.926 25.926"
                      >
                        <g id="check" transform="translate(-0.281 -0.281)">
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            transform="translate(1.244 1.244)"
                            stroke="#000"
                            strokeMiterlimit="10"
                            strokeWidth="1.926"
                          />
                          <line
                            x2="13"
                            transform="translate(6.744 13.244)"
                            fill="none"
                            stroke="#000"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            opacity="0"
                          />
                          <line
                            y1="13"
                            transform="translate(13.244 6.744)"
                            fill="none"
                            stroke="#000"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            opacity="0"
                          />
                          <path
                            d="M3015.288,2664.107l4.435,4.435,10.522-10.522"
                            transform="translate(-3009.52 -2650.321)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="3"
                          />
                        </g>
                      </svg>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="cta-addToList--icon cta-addToList--icon-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25.926 25.926"
                      >
                        <g transform="translate(0.792 0.792)">
                          <line
                            x2="10"
                            transform="translate(7.171 12.171)"
                            fill="none"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          />
                          <line
                            y1="10"
                            transform="translate(12.171 7.171)"
                            fill="none"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            transform="translate(0.171 0.171)"
                            fill="none"
                            strokeMiterlimit="10"
                            strokeWidth="1.926"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="cta-addToList--icon cta-addToList--icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25.926 25.926"
                      >
                        <g transform="translate(-0.281 -0.281)">
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            transform="translate(1.244 1.244)"
                            fill="#fff"
                            stroke="#fff"
                            strokeMiterlimit="10"
                            strokeWidth="1.926"
                          />
                          <line
                            x2="13"
                            transform="translate(6.744 13.244)"
                            fill="none"
                            stroke={props.colors[0]}
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          />
                          <line
                            y1="13"
                            transform="translate(13.244 6.744)"
                            fill="none"
                            stroke={props.colors[0]}
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          />
                        </g>
                      </svg>
                    </div>
                  </>
                )}
              </StyledBtn2>
            </>
          ) : (
            <>
              <Scrollbars style={{ width: "100%", height: "100vh" }}>
                <h2 className="zoomModal_name">{productInfo.name}</h2>
                <div className="zoomModal-close" onClick={props.closeModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 29.414 29.414"
                  >
                    <g id="Cross" transform="translate(0.397 0.707)">
                      <line
                        x2="28"
                        y2="28"
                        transform="translate(0.31)"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <line
                        y1="28"
                        x2="28"
                        transform="translate(0.31)"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </div>
                <div className="zoomModal-multi-grid">
                  {productInfo.products.map(prod => {
                    return (
                      <div className="zoomModal-multi-grid-item">
                        <h4 className="zoomModal-multi-grid-item_title">
                          {prod.alt}
                        </h4>
                        <div className="img-container">
                          <img src={prod.img} alt={prod.alt} />
                        </div>
                        <StyledMultiBtn
                          onClick={() => props.addItem(prod, productInfo.index)}
                          className="multi--addItem"
                          color={props.colors[0]}
                          isClicked={props.wishlist.some(
                            wishlistProd => wishlistProd.key === prod.key
                          )}
                        >
                          {props.wishlist.some(
                            wishlistProd => wishlistProd.key === prod.key
                          ) ? (
                            <>
                              <svg
                                className="multi--addItem-check"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25.926 25.926"
                              >
                                <g
                                  id="check"
                                  transform="translate(-0.281 -0.281)"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    transform="translate(1.244 1.244)"
                                    stroke="#000"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.926"
                                  />
                                  <path
                                    d="M3015.288,2664.107l4.435,4.435,10.522-10.522"
                                    transform="translate(-3009.52 -2650.321)"
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth="3"
                                  />
                                </g>
                              </svg>
                            </>
                          ) : (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25.926 25.926"
                                className="multi--addItem__1"
                              >
                                <g transform="translate(0.792 0.792)">
                                  <line
                                    x2="10"
                                    transform="translate(7.171 12.171)"
                                    fill="none"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                  <line
                                    y1="10"
                                    transform="translate(12.171 7.171)"
                                    fill="none"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    transform="translate(0.171 0.171)"
                                    fill="none"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.926"
                                  />
                                </g>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25.926 25.926"
                                className="multi--addItem__2"
                              >
                                <g transform="translate(-0.281 -0.281)">
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    transform="translate(1.244 1.244)"
                                    fill="#fff"
                                    stroke="#fff"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.926"
                                  />
                                  <line
                                    x2="13"
                                    transform="translate(6.744 13.244)"
                                    fill="none"
                                    stroke={props.colors[0]}
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                  <line
                                    y1="13"
                                    transform="translate(13.244 6.744)"
                                    fill="none"
                                    stroke={props.colors[0]}
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                </g>
                              </svg>
                            </>
                          )}
                          <span
                            className={
                              props.wishlist.some(
                                wishlistProd => wishlistProd.key === prod.key
                              )
                                ? "added-btn"
                                : ""
                            }
                          >
                            {props.wishlist.some(
                              wishlistProd => wishlistProd.key === prod.key
                            )
                              ? "added!"
                              : ""}
                          </span>
                        </StyledMultiBtn>
                      </div>
                    );
                  })}
                  {productInfo.products.map(prod => {
                    return (
                      <div className="zoomModal-multi-grid-item">
                        <h4 className="zoomModal-multi-grid-item_title">
                          {prod.alt}
                        </h4>
                        <div className="img-container">
                          <img src={prod.img} alt={prod.alt} />
                        </div>
                        <StyledMultiBtn
                          onClick={() => props.addItem(prod, productInfo.index)}
                          className="multi--addItem"
                          color={props.colors[0]}
                          isClicked={props.wishlist.some(
                            wishlistProd => wishlistProd.key === prod.key
                          )}
                        >
                          {props.wishlist.some(
                            wishlistProd => wishlistProd.key === prod.key
                          ) ? (
                            <>
                              <svg
                                className="multi--addItem-check"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25.926 25.926"
                              >
                                <g
                                  id="check"
                                  transform="translate(-0.281 -0.281)"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    transform="translate(1.244 1.244)"
                                    stroke="#000"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.926"
                                  />
                                  <path
                                    d="M3015.288,2664.107l4.435,4.435,10.522-10.522"
                                    transform="translate(-3009.52 -2650.321)"
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth="3"
                                  />
                                </g>
                              </svg>
                            </>
                          ) : (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25.926 25.926"
                                className="multi--addItem__1"
                              >
                                <g transform="translate(0.792 0.792)">
                                  <line
                                    x2="10"
                                    transform="translate(7.171 12.171)"
                                    fill="none"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                  <line
                                    y1="10"
                                    transform="translate(12.171 7.171)"
                                    fill="none"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    transform="translate(0.171 0.171)"
                                    fill="none"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.926"
                                  />
                                </g>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25.926 25.926"
                                className="multi--addItem__2"
                              >
                                <g transform="translate(-0.281 -0.281)">
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    transform="translate(1.244 1.244)"
                                    fill="#fff"
                                    stroke="#fff"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.926"
                                  />
                                  <line
                                    x2="13"
                                    transform="translate(6.744 13.244)"
                                    fill="none"
                                    stroke={props.colors[0]}
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                  <line
                                    y1="13"
                                    transform="translate(13.244 6.744)"
                                    fill="none"
                                    stroke={props.colors[0]}
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                  />
                                </g>
                              </svg>
                            </>
                          )}
                          <span
                            className={
                              props.wishlist.some(
                                wishlistProd => wishlistProd.key === prod.key
                              )
                                ? "added-btn"
                                : ""
                            }
                          >
                            {props.wishlist.some(
                              wishlistProd => wishlistProd.key === prod.key
                            )
                              ? "added!"
                              : ""}
                          </span>
                        </StyledMultiBtn>
                      </div>
                    );
                  })}
                </div>
              </Scrollbars>
            </>
          )}
        </article>
      </div>
    </OffClick>
  );
}

export default Showcase;
